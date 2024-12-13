import { StrapiQuery } from "./StrapiQuery";

export type StrapiClientOptions = {
  url: string;
};

export type StrapiURI = {
  id?: any;
  query?: StrapiQuery;
};

export type StrapiMeta = {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type StrapiError = {
  status: number;
  name: string;
  message: string;
  details?: any;
};

export type StrapiResult<T> = {
  data?: T;
  meta?: StrapiMeta;
  error?: StrapiError;
};
