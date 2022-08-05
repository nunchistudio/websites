---
location: "/integrations/google/documentation/google-nosql.md"
title: "Google Cloud: Manage documents within Firestore collection"

goref:
  - "integrations/google"
  - "specifications/nosql"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-nosql.md" variables={
    mod: "google",
    name: "Firestore",
    config: {
      "Collection": "projects/my-project/databases/(default)/documents/my-collection",
      "Key": "id",
    },
  }
/%} 
