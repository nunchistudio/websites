---
location: "/integrations/aws/documentation/aws-bucket.md"
title: "AWS: Manage blobs within S3 bucket"

goref:
  - "integrations/aws"
  - "specifications/bucket"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-bucket.md" variables={
    mod: "aws",
    name: "S3",
    config: {
      "Bucket": "my-bucket",
    },
  }
/%} 
