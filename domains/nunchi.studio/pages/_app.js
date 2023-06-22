import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';

import {
  Theme, Chrome,
  globalStyles,
} from '@nunchistudio/base';

import HomeLayout from '../layouts/home';
import HelixLayout from '../layouts/helix';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const path = router.asPath;

  let Layout = HomeLayout;
  if (path.startsWith('/helix')) {
    Layout = HelixLayout;
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
              <Analytics />
            </Layout>
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default App;
