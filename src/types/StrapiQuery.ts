export type StrapiQuery<T> = {
  filters?: any;
  fields?: string[];
  populate?: any;
  sort?: string[];
  pagination?: any;
  status?: "draft" | "published";
  locale?: string;
};
