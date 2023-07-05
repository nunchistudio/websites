---
location: "/integration/clickhouse"
title: "clickhouse"
---

# clickhouse

```go
import "go.nunchi.studio/helix/integration/clickhouse"
```

Package clickhouse exposes an opinionated way to interact with ClickHouse.

## Index

- [type Batch](<#Batch>)
- [type ClickHouse](<#ClickHouse>)
  - [func Connect\(cfg Config\) \(ClickHouse, error\)](<#Connect>)
- [type Config](<#Config>)


## type [Batch](<https://github.com/nunchistudio/helix.go/blob/main/integration/clickhouse/batch.go#L27-L33>)

Batch exposes an opinionated way to interact with a ClickHouse batch capabilities. All functions are wrapped with a context because some of them automatically do distributed tracing \(by using the said context\) as well as error recording within traces.

```go
type Batch interface {
    Append(ctx context.Context, v any) error
    Abort(ctx context.Context) error
    Flush(ctx context.Context) error
    Send(ctx context.Context) error
    IsSent(ctx context.Context) bool
}
```

## type [ClickHouse](<https://github.com/nunchistudio/helix.go/blob/main/integration/clickhouse/clickhouse.go#L19-L25>)

ClickHouse exposes an opinionated way to interact with ClickHouse, by bringing automatic distributed tracing as well as error recording within traces.

```go
type ClickHouse interface {
    Query(ctx context.Context, query string, args ...any) (driver.Rows, error)
    QueryRow(ctx context.Context, query string, args ...any) driver.Row
    PrepareBatch(ctx context.Context, query string) (Batch, error)
    Exec(ctx context.Context, query string, args ...any) error
    AsyncInsert(ctx context.Context, query string, wait bool) error
}
```

### func [Connect](<https://github.com/nunchistudio/helix.go/blob/main/integration/clickhouse/clickhouse.go#L44>)

```go
func Connect(cfg Config) (ClickHouse, error)
```

Connect tries to connect to the ClickHouse server given the Config. Returns an error if Config is not valid or if the connection failed.

## type [Config](<https://github.com/nunchistudio/helix.go/blob/main/integration/clickhouse/config.go#L11-L35>)

Config is used to configure the ClickHouse integration.

```go
type Config struct {

    // Addresses are ClickHouse addresses to connect to.
    //
    // Default:
    //
    //   []string{"127.0.0.1:8123"}
    Addresses []string `json:"addresses"`

    // Database is the database to connect to.
    //
    // Default:
    //
    //   "default"
    Database string `json:"-"`

    // User is the user to use to connect to the database.
    User string `json:"-"`

    // Password is the user's password to connect to the database.
    Password string `json:"-"`

    // TLSConfig configures TLS to communicate with the ClickHouse server.
    TLS integration.ConfigTLS `json:"tls"`
}
```

