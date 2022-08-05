import { useRouter } from 'next/router';

import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';

import {
  Theme, Chrome,
  globalStyles,
} from '@nunchistudio/base';

import HomeLayout from '../layouts/home';
import DocsLayout from '../layouts/docs';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const path = router.asPath;

  let Layout = DocsLayout;
  if (path == '/') {
    Layout = HomeLayout;
  }

  const { markdoc } = pageProps;

  return (
    <>
      <Global styles={globalStyles} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <Layout path={path} markdoc={markdoc}>
              <Component {...pageProps} />
            </Layout>
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default App;
