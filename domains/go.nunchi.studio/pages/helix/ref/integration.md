---
location: "/integration"
title: "integration"
---

# integration

```go
import "go.nunchi.studio/helix/integration"
```

Package integration exposes the requirements that an integration must meet to be compatible with the helix.go ecosystem.

## Index

- [type ConfigTLS](<#ConfigTLS>)
  - [func \(cfg \*ConfigTLS\) Sanitize\(\) \[\]errorstack.Validation](<#ConfigTLS.Sanitize>)
  - [func \(cfg \*ConfigTLS\) ToStandardTLS\(\) \(\*tls.Config, \[\]errorstack.Validation\)](<#ConfigTLS.ToStandardTLS>)
- [type Integration](<#Integration>)


## type ConfigTLS

ConfigTLS is the common configuration for TLS across all integrations.

```go
type ConfigTLS struct {

    // Enabled enables TLS for the integration. When disabled, other fields are
    // ignored and can be empty.
    Enabled bool `json:"enabled"`

    // ServerName is used to verify the hostname on the returned certificates. It
    // is also included in the client's handshake to support virtual hosting unless
    // it is an IP address.
    ServerName string `json:"-"`

    // CertFile is the relative or absolute path to the certificate file.
    //
    // Example:
    //
    //   "./server.crt"
    CertFile string `json:"-"`

    // KeyFile is the relative or absolute path to the private key file.
    //
    // Example:
    //
    //   "./server.key"
    KeyFile string `json:"-"`

    // RootCAFiles allows to provide the RootCAs pool from a list of filenames.
    // This is not required by all integrations.
    RootCAFiles []string `json:"-"`
}
```

### func \(\*ConfigTLS\) Sanitize

```go
func (cfg *ConfigTLS) Sanitize() []errorstack.Validation
```

Sanitize sets default values \- if applicable \- and validates the configuration. Returns validation errors if configuration is not valid. This doesn't return a standard error since this function shall only be called by integrations. This allows to easily add error validations to an existing errorstack:

```
stack.WithValidations(cfg.TLS.Sanitize()...)
```

### func \(\*ConfigTLS\) ToStandardTLS

```go
func (cfg *ConfigTLS) ToStandardTLS() (*tls.Config, []errorstack.Validation)
```

ToStandardTLS tries to return a Go standard \*tls.Config. Returns validation errors if configuration is not valid. This doesn't return a standard error since this function shall only be called by integrations. This allows to easily add error validations to an existing errorstack.

## type Integration

Integration describes the lifecycle of an integration.

```go
type Integration interface {

    // String returns the string representation of the integration.
    //
    // Examples:
    //
    //   "nats"
    //   "vault"
    String() string

    // Start starts/opens a connection with the integration, if applicable. This
    // function can be blocking, for starting a server or a worker for example.
    // The service package executes each Start function of attached integrations
    // in their own goroutine, and returns an error as soon as a goroutine returns
    // a non-nil error.
    Start(ctx context.Context) error

    // Close closes the connection with the integration, if applicable.
    Close(ctx context.Context) error
}
```

