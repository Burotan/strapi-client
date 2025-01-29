import { StrapiClientOptions } from "../types/StrapiOptions";
import type { paths } from "../../types/strapi";
import createClient from "openapi-fetch";

export class StrapiClient {
  private options: StrapiClientOptions;
  client: ReturnType<typeof createClient<paths>>;

  constructor(options: StrapiClientOptions) {
    this.options = options;

    this.client = createClient<paths>({
      baseUrl: this.options.url,
      headers: {
        "Content-Type": "application/json",
        ...(this.options.token && {
          Authorization: `Bearer ${this.options.token}`,
        }),
      },
    });
  }
}
