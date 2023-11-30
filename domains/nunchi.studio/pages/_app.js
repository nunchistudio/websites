import { useRouter } from 'next/router';

import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';

import {
  Theme, Chrome,
  globalStyles,
} from '@nunchistudio/base';

import HomeLayout from '../layouts/home';
import HelixLayout from '../layouts/helix';
import HashiBoxLayout from '../layouts/hashibox';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const path = router.asPath;

  let Layout;
  switch (true) {
    case router.route == '/helix' || router.route.startsWith('/helix/'):
      Layout = HelixLayout;
      break;
    case router.route == '/hashibox' || router.route.startsWith('/hashibox/'):
      Layout = HashiBoxLayout;
      break;
    default:
      Layout = HomeLayout
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
