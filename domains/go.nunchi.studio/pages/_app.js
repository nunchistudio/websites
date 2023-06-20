import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';

import {
  Theme, Chrome,
  globalStyles,
} from '@nunchistudio/base';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <Component {...pageProps} />
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default App;
