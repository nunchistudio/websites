---
location: "/integrations/azure/documentation/azure-bucket.md"
title: "Azure: Manage blobs within Blob Storage"

goref:
  - "integrations/azure"
  - "specifications/bucket"
---

# {% $markdoc.frontmatter.title %}

## Environment variables

This integration relies on the Azure SDK. Therefore, the following environment
variables are required in the Temporal worker:

```bash
# The Azure Storage account to use.
AZURE_STORAGE_ACCOUNT=https://myaccount.blob.core.windows.net

# The Azure Storage key to use. Only one of `AZURE_STORAGE_KEY`
# and `AZURE_STORAGE_SAS_TOKEN` is required.
AZURE_STORAGE_KEY=

# The Azure Storage token to use. Only one of `AZURE_STORAGE_KEY`
# and `AZURE_STORAGE_SAS_TOKEN` is required.
AZURE_STORAGE_SAS_TOKEN=
```

{% partial file="specifications/integration-bucket.md" variables={
    mod: "azure",
    name: "Blob Storage",
    config: {
      "Bucket": "my-container",
    },
  }
/%} 
