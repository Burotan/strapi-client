import createClient from "openapi-fetch";
import { StrapiClientOptions } from "../types/StrapiOptions";
import { paths } from "../../types/strapi";

export class Strapi {
  client: ReturnType<typeof createClient<paths>>;

  constructor(options: StrapiClientOptions) {
    // this.client = new StrapiClient(options);

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

  async login() {}

  async logout() {}

  async upload() {}
}
