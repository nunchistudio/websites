---
location: "/integration/vault"
title: "vault"
---

# vault

```go
import "go.nunchi.studio/helix/integration/vault"
```

Package vault exposes an opinionated way to interact with Vault.

## Index

- [type Config](<#Config>)
- [type KeyValue](<#KeyValue>)
- [type Vault](<#Vault>)
  - [func Connect\(cfg Config\) \(Vault, error\)](<#Connect>)


## type [Config](<https://github.com/nunchistudio/helix.go/blob/main/integration/vault/config.go#L13-L42>)

Config is used to configure the Vault integration.

```go
type Config struct {

    // Address is the Vault server address to connect to. This should be a complete
    // URL.
    //
    // Default:
    //
    //   "http://127.0.0.1:8200"
    Address string `json:"address"`

    // AgentAddress is the local Vault agent address to connect to. This should be
    // a complete URL.
    //
    // Example:
    //
    //   "http://127.0.0.1:8200"
    AgentAddress string `json:"agent_address"`

    // Namespace sets the namespace to connect to, if not already set via environment
    // variable.
    Namespace string `json:"namespace"`

    // Token sets the token to use, if not already set via environment variable.
    Token string `json:"-"`

    // TLSConfig configures TLS to communicate with the Vault server.
    //
    // Important: Only the first Root CA file will be used and applied.
    TLS integration.ConfigTLS `json:"tls"`
}
```

## type [KeyValue](<https://github.com/nunchistudio/helix.go/blob/main/integration/vault/kv.go#L27-L42>)

KeyValue exposes an opinionated way to interact with Vault Key\-Value v2. All functions automatically handle distributed tracing as well as error recording within traces.

```go
type KeyValue interface {
    Delete(ctx context.Context, secretpath string) error
    DeleteMetadata(ctx context.Context, secretpath string) error
    DeleteVersions(ctx context.Context, secretpath string, versions []int) error
    Destroy(ctx context.Context, secretpath string, versions []int) error
    Get(ctx context.Context, secretpath string) (*api.KVSecret, error)
    GetMetadata(ctx context.Context, secretpath string) (*api.KVMetadata, error)
    GetVersion(ctx context.Context, secretpath string, version int) (*api.KVSecret, error)
    GetVersionsAsList(ctx context.Context, secretpath string) ([]api.KVVersionMetadata, error)
    Patch(ctx context.Context, secretpath string, data map[string]any) (*api.KVSecret, error)
    PatchMetadata(ctx context.Context, secretpath string, metadata api.KVMetadataPatchInput) error
    Put(ctx context.Context, secretpath string, data map[string]any) (*api.KVSecret, error)
    PutMetadata(ctx context.Context, secretpath string, metadata api.KVMetadataPutInput) error
    Rollback(ctx context.Context, secretpath string, toVersion int) (*api.KVSecret, error)
    Undelete(ctx context.Context, secretpath string, versions []int) error
}
```

## type [Vault](<https://github.com/nunchistudio/helix.go/blob/main/integration/vault/vault.go#L16-L18>)

Vault exposes an opinionated way to interact with Vault, by bringing automatic distributed tracing as well as error recording within traces.

```go
type Vault interface {
    KeyValue(ctx context.Context, path string) KeyValue
}
```

### func [Connect](<https://github.com/nunchistudio/helix.go/blob/main/integration/vault/vault.go#L37>)

```go
func Connect(cfg Config) (Vault, error)
```

Connect tries to connect to the Vault server given the Config. Returns an error if Config is not valid or if the connection failed.

