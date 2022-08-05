---
location: "/integrations/azure/documentation/azure-nosql.md"
title: "Azure: Manage documents within CosmosDB collection"

goref:
  - "integrations/azure"
  - "specifications/nosql"
---

# {% $markdoc.frontmatter.title %}

## Environment variables

This integration relies on the Azure SDK. Therefore, the following environment
variables are required in the Temporal worker:

```bash
# The MongoDB connection string.
MONGO_SERVER_URL=mongodb://user:password@host:27017/database
```

{% partial file="specifications/integration-nosql.md" variables={
    mod: "azure",
    name: "CosmosDB",
    config: {
      "Collection": "mydb/collection",
      "Key": "_id",
    },
  }
/%} 
