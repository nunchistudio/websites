---
location: "/integrations/google/documentation/google-bucket.md"
title: "Google Cloud: Manage blobs within Cloud Storage"

goref:
  - "integrations/google"
  - "specifications/bucket"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-bucket.md" variables={
    mod: "google",
    name: "Cloud Storage",
    config: {
      "Bucket": "my-bucket",
    },
  }
/%} 
