import QueryString from "qs";
import { StrapiQuery } from "../types/StrapiQuery";
import {
  StrapiClientOptions,
  StrapiResult,
  StrapiURI,
} from "../types/StrapiOptions";

export class StrapiQueryBuilder<T> {
  private name: string;
  private options: StrapiClientOptions;

  constructor(name: string, options: StrapiClientOptions) {
    this.name = name;
    this.options = options;
  }

  private url(options: StrapiURI) {
    const schema = [this.options.url, "api", this.name];

    if (options.id) schema.push(options.id);

    const fullUrl = schema.join("/");

    if (options.query) {
      const qs = QueryString.stringify(options.query);
      return `${fullUrl}?${qs}`;
    }
    return fullUrl;
  }

  public async fetch(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    url: string,
    data?: any
  ) {
    const result = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data && JSON.stringify({ data }),
    });

    return method !== "DELETE" ? result.json() : result.ok;
  }

  public async findMany(query?: StrapiQuery): Promise<StrapiResult<any[]>> {
    const url = this.url({ query });
    return await this.fetch("GET", url);
  }

  public async findOne(
    id: any,
    query?: StrapiQuery
  ): Promise<StrapiResult<any>> {
    const url = this.url({ id, query });
    return await this.fetch("GET", url);
  }

  public async create(
    data: any,
    query?: StrapiQuery
  ): Promise<StrapiResult<any>> {
    const url = this.url({ query });
    const result = await this.fetch("POST", url, data);
    return result;
  }

  public async update(
    id: any,
    data: any,
    query?: StrapiQuery
  ): Promise<StrapiResult<any>> {
    const url = this.url({ id, query });
    const result = await this.fetch("PUT", url, data);
    return result;
  }

  public async delete(id: any): Promise<void> {
    const url = this.url({ id });
    const result = await this.fetch("DELETE", url);
    return result;
  }
}
