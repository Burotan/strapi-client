import { StrapiClientOptions } from "../types/StrapiOptions";
import { StrapiQueryBuilder } from "./StrapiQueryBuilder";

export class StrapiClient {
  options: StrapiClientOptions;

  constructor(options: StrapiClientOptions) {
    this.options = options;
  }

  static create(options: StrapiClientOptions) {
    return new StrapiClient(options);
  }

  // TODO: Get names from endpoint
  documents(name: string) {
    const queryBuilder = new StrapiQueryBuilder(name, this.options);
    return queryBuilder;
  }
}
