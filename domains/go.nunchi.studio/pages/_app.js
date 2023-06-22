import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';

import {
  Theme, Chrome,
  globalStyles,
} from '@nunchistudio/base';

import HelixLayout from '../layouts/helix';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const path = router.asPath;

  const { markdoc } = pageProps;

  if (path.startsWith('/helix/ref')) {
    return (
      <>
        <Global styles={globalStyles} />
        <Theme>
          <Chrome>
            <EuiErrorBoundary>
              <HelixLayout path={path} markdoc={markdoc}>
                <Component {...pageProps} />
                <Analytics />
              </HelixLayout>
            </EuiErrorBoundary>
          </Chrome>
        </Theme>
      </>
    );
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <Component {...pageProps} />
            <Analytics />
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default App;
