# Strapi Client

A fully typed API client for Strapi CMS, providing seamless integration with Strapi TypeScript projects.

## Usage

```js
import { StrapiClient } from "@burotan/strapi-client";

const strapi = new StrapiClient({
  url: "https://my-strapi-instance.com",
  token: "my-token",
});

const result = await strapi.documents("boats").findMany({
  filters: {
    name: {
      $eq: "my-boat",
    },
  },
});
```
