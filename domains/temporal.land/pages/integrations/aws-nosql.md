---
location: "/integrations/aws/documentation/aws-nosql.md"
title: "AWS: Manage documents within DynamoDB table"

goref:
  - "integrations/aws"
  - "specifications/nosql"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-nosql.md" variables={
    mod: "aws",
    name: "DynamoDB",
    config: {
      "Collection": "my-table",
      "Key": "id",
    },
  }
/%} 
