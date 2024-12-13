import { StrapiQuery } from "./StrapiQuery";

export type StrapiClientOptions = {
  url: string;
};

export type StrapiURI = {
  id?: any;
  query?: StrapiQuery;
};
