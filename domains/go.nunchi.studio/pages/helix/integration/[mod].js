import NextHead from 'next/head';

import ecosystem from '../../../data/helix/ecosystem.json';

export async function getStaticPaths() {
  let paths = [];

  ecosystem.integrations.forEach(mod => {
    if (!mod.soon) {
      paths.push({
        params: {
          mod: mod.id,
        },
      })
    }
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
    },
  }
};

function Integration(props) {
  return (
    <>
      <NextHead>
        <title>Go package: {props.mod}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="go-import" content="go.nunchi.studio/helix git https://github.com/nunchistudio/helix.go" />
        <meta name="go-source" content="go.nunchi.studio/helix https://github.com/nunchistudio/helix.go https://github.com/nunchistudio/helix.go/tree/main{/dir} https://github.com/nunchistudio/helix.go/tree/main{/dir}/{file}#L{line}" />
        <meta httpEquiv="refresh" content={`0; url=https://pkg.go.dev/go.nunchi.studio/helix/integration/${props.mod}`} />
      </NextHead>
    </>
  );
};

export default Integration;
