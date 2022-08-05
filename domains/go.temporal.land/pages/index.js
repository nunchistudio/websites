import NextHead from 'next/head';

function Index(props) {
  return (
    <>
      <NextHead>
        <title>Go packages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="go-import" content="go.temporal.land git https://github.com/nunchistudio/temporal-land" />
        <meta name="go-source" content="go.temporal.land https://github.com/nunchistudio/temporal-land https://github.com/nunchistudio/temporal-land/tree/main{/dir} https://github.com/nunchistudio/temporal-land/tree/main{/dir}/{file}#L{line}" />
        <meta httpEquiv="refresh" content={`0; url=https://pkg.go.dev/go.temporal.land`} />
      </NextHead>
    </>
  );
};

export default Index;
