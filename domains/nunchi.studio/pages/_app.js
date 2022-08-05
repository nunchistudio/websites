import { useRouter } from 'next/router';

import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';

import {
  Theme, Chrome,
  globalStyles,
} from '@nunchistudio/base';

import HomeLayout from '../layouts/home';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const path = router.asPath;

  const { markdoc } = pageProps;

  return (
    <>
      <Global styles={globalStyles} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <HomeLayout path={path} markdoc={markdoc}>
              <Component {...pageProps} />
            </HomeLayout>
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default App;
