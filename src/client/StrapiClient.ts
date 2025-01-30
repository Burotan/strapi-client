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

  async get(endpoint: PathsWithMethod<paths, "get">) {
    return await this.client.GET(endpoint, {
      params: {
        query: {},
      },
    });
  }

  async post(enpoint: PathsWithMethod<paths, "post">) {
    const result = await this.client.POST("/tenants", {
      body: {
        data: {
          name: "test",
        },
      },
    });
  }

  async put() {
    console.log("put");
  }

  async delete() {
    console.log("delete");
  }
}
