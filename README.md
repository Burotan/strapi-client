# Strapi Client

![npm](https://img.shields.io/npm/v/@burotan/strapi-client)

![npm](https://img.shields.io/bundlephobia/min/@burotan/strapi-client)

![npm](https://img.shields.io/npm/dm/@burotan/strapi-client)

![npm](https://img.shields.io/npm/l/@burotan/strapi-client)

![npm](https://img.shields.io/github/stars/burotan/strapi-client?style=social)

![npm](https://img.shields.io/github/forks/burotan/strapi-client?style=social)

![npm](https://img.shields.io/github/issues/burotan/strapi-client?style=social)

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
