---
location: "/integration/postgres"
title: "postgres"
---

# postgres

```go
import "go.nunchi.studio/helix/integration/postgres"
```

Package postgres exposes an opinionated way to interact with PostgreSQL.

## Index

- [type Config](<#Config>)
- [type PostgreSQL](<#PostgreSQL>)
  - [func Connect\(cfg Config\) \(PostgreSQL, error\)](<#Connect>)
- [type Tx](<#Tx>)


## type [Config](<https://github.com/nunchistudio/helix.go/blob/main/integration/postgres/config.go#L12-L42>)

Config is used to configure the PostgreSQL integration.

```go
type Config struct {

    // Addresses are PostgreSQL addresses to connect to.
    //
    // Default:
    //
    //   "127.0.0.1:5432"
    Address string `json:"address"`

    // Database is the database to connect to.
    //
    // Required.
    Database string `json:"-"`

    // User is the user to use to connect to the database.
    //
    // Required.
    User string `json:"-"`

    // Password is the user's password to connect to the database.
    //
    // Required.
    Password string `json:"-"`

    // TLSConfig configures TLS to communicate with the PostgreSQL server.
    TLS integration.ConfigTLS `json:"tls"`

    // OnNotification is a callback function called when a notification from the
    // LISTEN/NOTIFY system is received.
    OnNotification func(notif *pgconn.Notification) `json:"-"`
}
```

## type [PostgreSQL](<https://github.com/nunchistudio/helix.go/blob/main/integration/postgres/postgres.go#L19-L27>)

PostgreSQL exposes an opinionated way to interact with PostgreSQL, by bringing automatic distributed tracing as well as error recording within traces.

```go
type PostgreSQL interface {
    BeginTx(ctx context.Context, txOptions pgx.TxOptions) (Tx, error)
    Exec(ctx context.Context, query string, args ...any) (pgconn.CommandTag, error)
    Prepare(ctx context.Context, id string, query string) (*pgconn.StatementDescription, error)
    Query(ctx context.Context, query string, args ...any) (pgx.Rows, error)
    QueryRow(ctx context.Context, query string, args ...any) pgx.Row
    SendBatch(ctx context.Context, batch *pgx.Batch) pgx.BatchResults
    WaitForNotification(ctx context.Context) (*pgconn.Notification, error)
}
```

### func [Connect](<https://github.com/nunchistudio/helix.go/blob/main/integration/postgres/postgres.go#L46>)

```go
func Connect(cfg Config) (PostgreSQL, error)
```

Connect tries to connect to the PostgreSQL server given the Config. Returns an error if Config is not valid or if the connection failed.

## type [Tx](<https://github.com/nunchistudio/helix.go/blob/main/integration/postgres/transaction.go#L25-L35>)

Tx represents a database transaction.

```go
type Tx interface {
    Begin(ctx context.Context) (Tx, error)
    Commit(ctx context.Context) error
    Rollback(ctx context.Context) error
    Exec(ctx context.Context, query string, args ...any) (commandTag pgconn.CommandTag, err error)
    Prepare(ctx context.Context, id string, query string) (*pgconn.StatementDescription, error)
    Query(ctx context.Context, query string, args ...any) (pgx.Rows, error)
    QueryRow(ctx context.Context, query string, args ...any) pgx.Row
    SendBatch(ctx context.Context, b *pgx.Batch) pgx.BatchResults
    LargeObjects(ctx context.Context) pgx.LargeObjects
}
```

