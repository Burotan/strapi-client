#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import chalk from "chalk";
import openapiTS, { astToString } from "openapi-typescript";

const { green, yellow, red, blue, cyan } = chalk;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_FILE = ".strapi-client.json";
const GITIGNORE = ".gitignore";

function ensureGitIgnore() {
  try {
    let content = "";
    if (fs.existsSync(GITIGNORE)) {
      content = fs.readFileSync(GITIGNORE, "utf8");
      if (content.includes(CONFIG_FILE)) {
        return;
      }
      content += content.endsWith("\n") ? "" : "\n";
    }
    content += CONFIG_FILE + "\n";
    fs.writeFileSync(GITIGNORE, content);
    console.log(green(`Added ${CONFIG_FILE} to .gitignore`));
  } catch (error) {
    console.error(
      yellow(`\nWarning: Could not update .gitignore: ${error.message}`)
    );
  }
}

function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
    }
  } catch (error) {
    console.error(red("\nError loading config:", error.message));
  }
  return null;
}

function saveConfig(config) {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
    return true;
  } catch (error) {
    console.error(red("\nError saving config:", error.message));
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
    console.error(red("\nError checking package manager:", error.message));
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
      red("\nError checking Strapi documentation plugin:", error.message)
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
    console.log(cyan("\nInstalling @strapi/plugin-documentation..."));
    const { execSync } = await import("child_process");
    execSync(installCommands[packageManager], {
      cwd: serverPath,
      stdio: "inherit",
    });
    return true;
  } catch (error) {
    console.error(red("\nError installing plugin:", error.message));
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
        message: cyan("Enter Strapi server folder location (relative path):"),
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
  console.log(blue(`\nDetected package manager: ${detectedManager}`));

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

  ensureGitIgnore();

  if (!saveConfig(config)) {
    console.error(red("\nFailed to save configuration."));
    return;
  }

  // Check if documentation plugin is installed
  const isDocPluginInstalled = await checkStrapiDocumentation(serverPath);
  if (!isDocPluginInstalled) {
    console.log(yellow("\n@strapi/plugin-documentation is not installed."));
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
          green(
            `\nYou can now generate types with ${packageManager} strapi-client:generate\nDon't forget to start your Strapi server!`
          )
        );
      }
    } else {
      console.log(yellow("\nOperation cancelled. Goodbye! 👋\n"));
    }
  } else {
    console.log(
      green(
        `\n@strapi/plugin-documentation is already installed.\nYou can generate types with ${packageManager} strapi-client:generate\nDon't forget to start your Strapi server!`
      )
    );
  }
}

async function handleGenerate() {
  const config = loadConfig();
  if (!config) {
    console.error(
      red("\nNo configuration found. Please run strapi-client:install first.\n")
    );
    process.exit(1);
  }

  console.log(cyan("\nUsing configuration:"));
  console.log(cyan("Server path:", config.serverPath));
  console.log(cyan("Package manager:", config.packageManager));

  // Check if documentation path exists
  const serverFullPath = path.resolve(config.serverPath);
  const docPath = path.join(
    serverFullPath,
    "src/extensions/documentation/documentation"
  );
  if (!fs.existsSync(docPath)) {
    console.error(
      red(
        "\nDocumentation path not found. Please run strapi-client:install and ensure Strapi server is running.\n"
      )
    );
    process.exit(1);
  }

  // Find latest version
  let latestVersion = "0.0.0";
  try {
    const versions = fs
      .readdirSync(docPath)
      .filter((dir) => /^\d+\.\d+\.\d+$/.test(dir))
      .sort((a, b) => {
        const [aMajor, aMinor, aPatch] = a.split(".").map(Number);
        const [bMajor, bMinor, bPatch] = b.split(".").map(Number);
        if (bMajor - aMajor !== 0) return bMajor - aMajor;
        if (bMinor - aMinor !== 0) return bMinor - aMinor;
        return bPatch - aPatch;
      });

    if (versions.length === 0) {
      console.error(
        red(
          "\nNo documentation versions found. Please ensure Strapi server is running.\n"
        )
      );
      process.exit(1);
    }

    latestVersion = versions[0];
  } catch (error) {
    console.error(red("\nError finding documentation version:", error.message));
    process.exit(1);
  }

  // Set the types path
  const typesPath = path.join(__dirname, "..", "types", "strapi.d.ts");

  // Ensure directory exists
  const typesDirPath = path.dirname(typesPath);
  if (!fs.existsSync(typesDirPath)) {
    fs.mkdirSync(typesDirPath, { recursive: true });
  }

  console.log(cyan(`Types will be generated at: ${typesPath}`));

  // Generate types using openapi-typescript
  const docFilePath = path.join(
    docPath,
    latestVersion,
    "full_documentation.json"
  );
  if (!fs.existsSync(docFilePath)) {
    console.error(
      red(
        `\nDocumentation file not found: ${docFilePath}\nPlease ensure Strapi server is running.\n`
      )
    );
    process.exit(1);
  }

  try {
    console.log(green("\n🔧 Generating types...\n"));

    // Read and parse the OpenAPI schema
    const schemaContent = fs.readFileSync(docFilePath, "utf8");
    const schema = JSON.parse(schemaContent);

    // Generate TypeScript types
    const ast = await openapiTS(schema);
    const output = astToString(ast);

    // Write to file
    fs.writeFileSync(typesPath, output);
    console.log(green("\nThat's done!! 🎉\n"));
  } catch (error) {
    console.error(red("\nError generating types:", error.message));
    process.exit(1);
  }
}

async function main() {
  console.log(blue("\n🚀 Strapi Client CLI Tool\n"));

  // Check if command was provided as argument
  const command = process.argv[2];
  const arg = process.argv[3];

  if (command) {
    switch (command) {
      case "strapi-client:install":
        await handleInstall(arg);
        break;
      case "strapi-client:generate":
        await handleGenerate().catch((error) => {
          console.error(red("\nError:", error.message));
          process.exit(1);
        });
        break;
      default:
        console.error(red(`\nUnknown command: ${command}\n`));
        console.log(yellow("Available commands:"));
        console.log(yellow("  strapi-client:install <server-path>"));
        console.log(yellow("  strapi-client:generate"));
        process.exit(1);
    }
    return;
  }

  // If no command provided, show interactive menu
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: cyan("What would you like to do?"),
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
    console.log(red("\nGoodbye! 👋\n"));
    process.exit(0);
  }

  if (answers.action === "strapi-client:install") {
    await handleInstall();
  } else if (answers.action === "strapi-client:generate") {
    await handleGenerate().catch((error) => {
      console.error(red("\nError:", error.message));
      process.exit(1);
    });
  }
}

main().catch((error) => {
  console.error(red("\nError:", error.message, "\n"));
  process.exit(1);
});
