import NextHead from 'next/head';

import ecosystem from '../data/ecosystem.json';

export async function getStaticPaths() {
  let paths = [];

  ecosystem.toplevel.forEach(mod => {
    paths.push({
      params: {
        mod: mod.id,
      },
    })
  });

  ecosystem.cli.forEach(mod => {
    paths.push({
      params: {
        mod: mod.id,
      },
    })
  });

  return {
    fallback: false,
    paths: paths,
  };
};

export async function getStaticProps({ params }) {
  return {
    props: {
      mod: params.mod,
      isCLI: ecosystem.cli.includes(params.mod),
    },
  }
};

function Root(props) {
  if (props.isCLI) {
    return (
      <>
        <NextHead>
          <title>Go package: {props.mod}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="go-import" content={`go.temporal.land git https://github.com/nunchistudio/${props.mod}`} />
          <meta name="go-source" content={`go.temporal.land https://github.com/nunchistudio/${props.mod} https://github.com/nunchistudio/${props.mod}/tree/main{/dir} https://github.com/nunchistudio/${props.mod}/tree/main{/dir}/{file}#L{line}`} />
          <meta httpEquiv="refresh" content={`0; url=https://pkg.go.dev/go.temporal.land/${props.mod}`} />
        </NextHead>
      </>
    );
  }

  return (
    <>
      <NextHead>
        <title>Go package: {props.mod}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="go-import" content="go.temporal.land git https://github.com/nunchistudio/temporal-land" />
        <meta name="go-source" content="go.temporal.land https://github.com/nunchistudio/temporal-land https://github.com/nunchistudio/temporal-land/tree/main{/dir} https://github.com/nunchistudio/temporal-land/tree/main{/dir}/{file}#L{line}" />
        <meta httpEquiv="refresh" content={`0; url=https://pkg.go.dev/go.temporal.land/${props.mod}`} />
      </NextHead>
    </>
  );
};

export default Root;
