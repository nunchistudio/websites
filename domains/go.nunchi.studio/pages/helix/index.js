import NextHead from 'next/head';

function Index(props) {
  return (
    <>
      <NextHead>
        <title>Go packages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="go-import" content="go.nunchi.studio/helix git https://github.com/nunchistudio/helix.go" />
        <meta name="go-source" content="go.nunchi.studio/helix https://github.com/nunchistudio/helix.go https://github.com/nunchistudio/helix.go/tree/main{/dir} https://github.com/nunchistudio/helix.go/tree/main{/dir}/{file}#L{line}" />
        <meta httpEquiv="refresh" content={`0; url=https://pkg.go.dev/go.nunchi.studio/helix`} />
      </NextHead>
    </>
  );
};

export default Index;
