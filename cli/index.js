#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const STORAGE_DIR = "storage";
const CONFIG_FILE = path.join(STORAGE_DIR, "server.json");

function ensureStorageDir() {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }
}

function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
    }
  } catch (error) {
    console.error(chalk.red("\nError loading config:", error.message));
  }
  return null;
}

function saveConfig(config) {
  try {
    ensureStorageDir();
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
    return true;
  } catch (error) {
    console.error(chalk.red("\nError saving config:", error.message));
    return false;
  }
}

async function checkPackageManager(serverPath) {
  let packageManager = "npm"; // default

  try {
    if (fs.existsSync(path.join(serverPath, "yarn.lock"))) {
      packageManager = "yarn";
    } else if (fs.existsSync(path.join(serverPath, "pnpm-lock.yaml"))) {
      packageManager = "pnpm";
    }
  } catch (error) {
    console.error(
      chalk.red("\nError checking package manager:", error.message)
    );
  }

  return packageManager;
}

async function checkStrapiDocumentation(serverPath) {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(serverPath, "package.json"), "utf8")
    );
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };
    return "@strapi/plugin-documentation" in dependencies;
  } catch (error) {
    console.error(
      chalk.red("\nError checking Strapi documentation plugin:", error.message)
    );
    return false;
  }
}

async function installPlugin(serverPath, packageManager) {
  const installCommands = {
    npm: "npm install @strapi/plugin-documentation",
    yarn: "yarn add @strapi/plugin-documentation",
    pnpm: "pnpm add @strapi/plugin-documentation",
  };

  try {
    console.log(chalk.cyan("\nInstalling @strapi/plugin-documentation..."));
    require("child_process").execSync(installCommands[packageManager], {
      cwd: serverPath,
      stdio: "inherit",
    });
    return true;
  } catch (error) {
    console.error(chalk.red("\nError installing plugin:", error.message));
    return false;
  }
}

async function handleInstall(serverPath) {
  // If serverPath not provided, ask for it
  if (!serverPath) {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "serverPath",
        message: chalk.cyan(
          "Enter Strapi server folder location (relative path):"
        ),
        default: "../server",
        validate: (input) => {
          if (!fs.existsSync(path.resolve(input))) {
            return "Directory does not exist";
          }
          return true;
        },
      },
    ]);
    serverPath = answer.serverPath;
  }

  // Convert to full relative path
  const fullServerPath = path.relative(process.cwd(), path.resolve(serverPath));

  // Check package manager
  const detectedManager = await checkPackageManager(serverPath);
  console.log(
    chalk.blue(`\nDetected package manager: ${chalk.bold(detectedManager)}`)
  );

  const { confirmManager } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmManager",
      message: "Do you want to use a different package manager?",
      default: false,
    },
  ]);

  let packageManager = detectedManager;
  if (confirmManager) {
    const { selectedManager } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedManager",
        message: "Select package manager:",
        choices: ["npm", "yarn", "pnpm"],
      },
    ]);
    packageManager = selectedManager;
  }

  // Save configuration
  const config = {
    serverPath: fullServerPath,
    packageManager,
  };

  if (!saveConfig(config)) {
    console.error(chalk.red("\nFailed to save configuration."));
    return;
  }

  // Check if documentation plugin is installed
  const isDocPluginInstalled = await checkStrapiDocumentation(serverPath);
  if (!isDocPluginInstalled) {
    console.log(
      chalk.yellow("\n@strapi/plugin-documentation is not installed.")
    );
    const { installDoc } = await inquirer.prompt([
      {
        type: "confirm",
        name: "installDoc",
        message: "Do you want to install @strapi/plugin-documentation?",
        default: true,
      },
    ]);

    if (installDoc) {
      const success = await installPlugin(serverPath, packageManager);
      if (success) {
        console.log(
          chalk.green(
            `\nYou can now generate types with ${chalk.bold(
              `${packageManager} strapi-client:generate`
            )}\nDon't forget to start your Strapi server!`
          )
        );
      }
    } else {
      console.log(chalk.yellow("\nOperation cancelled. Goodbye! 👋\n"));
    }
  } else {
    console.log(
      chalk.green(
        `\n@strapi/plugin-documentation is already installed.\nYou can generate types with ${chalk.bold(
          `${packageManager} strapi-client:generate`
        )}\nDon't forget to start your Strapi server!`
      )
    );
  }
}

async function handleGenerate() {
  const config = loadConfig();
  if (!config) {
    console.error(
      chalk.red(
        "\nNo configuration found. Please run strapi-client:install first.\n"
      )
    );
    process.exit(1);
  }

  console.log(chalk.cyan("\nUsing configuration:"));
  console.log(chalk.cyan("Server path:", config.serverPath));
  console.log(chalk.cyan("Package manager:", config.packageManager));

  console.log(chalk.green("\n🔧 Generating types...\n"));
}

async function main() {
  console.log(chalk.blue.bold("\n🚀 Strapi Client CLI Tool\n"));

  // Check if command was provided as argument
  const command = process.argv[2];
  const arg = process.argv[3];

  if (command) {
    switch (command) {
      case "strapi-client:install":
        await handleInstall(arg);
        break;
      case "strapi-client:generate":
        await handleGenerate();
        break;
      default:
        console.error(chalk.red(`\nUnknown command: ${command}\n`));
        console.log(chalk.yellow("Available commands:"));
        console.log(chalk.yellow("  strapi-client:install <server-path>"));
        console.log(chalk.yellow("  strapi-client:generate"));
        process.exit(1);
    }
    return;
  }

  // If no command provided, show interactive menu
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: chalk.cyan("What would you like to do?"),
      choices: [
        {
          name: "📦 Install Strapi documentation plugin",
          value: "strapi-client:install",
        },
        { name: "🔧 Generate types", value: "strapi-client:generate" },
        { name: "❌ Exit", value: "exit" },
      ],
    },
  ]);

  if (answers.action === "exit") {
    console.log(chalk.red.bold("\nGoodbye! 👋\n"));
    process.exit(0);
  }

  if (answers.action === "strapi-client:install") {
    await handleInstall();
  } else if (answers.action === "strapi-client:generate") {
    await handleGenerate();
  }
}

main().catch((error) => {
  console.error(chalk.red("\nError:", error.message, "\n"));
  process.exit(1);
});
