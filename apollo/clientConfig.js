const hasuraKey = process.env.HASURA_SECRET;

import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
    httpLinkOptions: {
      uri: "https://mfhasura.producerow.xyz/v1/graphql",
      credentials: "same-origin",
      headers: {
        "x-hasura-admin-secret": "YV9aDfx37dwVitJfTNznfmJozgzst4JE",
      },
    },
    cache: new InMemoryCache(),
  };
}