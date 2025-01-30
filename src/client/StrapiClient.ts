import createClient from "openapi-fetch";
import { paths, operations } from "../../types/strapi";
import { StrapiClientOptions } from "../types/StrapiOptions";
import { PathsWithMethod } from "openapi-typescript-helpers";
import { StrapiQuery } from "../types/StrapiQuery";

export class StrapiClient {
  client: ReturnType<typeof createClient<paths>>;

  constructor(options: StrapiClientOptions) {
    this.client = createClient<paths>({
      baseUrl: `${options.url}/api`,
      headers: {
        "Content-Type": "application/json",
        ...(options.token && {
          Authorization: `Bearer ${options.token}`,
        }),
      },
    });
  }

  async get() {
    console.log("get");
  }

  async post() {
    console.log("post");
  }

  async put() {
    console.log("put");
  }

  async delete() {
    console.log("delete");
  }
}
