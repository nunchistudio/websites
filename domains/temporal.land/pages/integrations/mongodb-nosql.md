---
location: "/integrations/mongodb/documentation/mongodb-nosql.md"
title: "MongoDB: Manage documents within collection"

goref:
  - "integrations/mongodb"
  - "specifications/nosql"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-nosql.md" variables={
    mod: "mongodb",
    name: "MongoDB",
    config: {
      "Collection": "mydb/collection",
      "Key": "_id",
    },
  }
/%} 
