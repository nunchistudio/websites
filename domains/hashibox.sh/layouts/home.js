import { EuiSpacer } from '@elastic/eui';

import { HomeLayout } from '@nunchistudio/base';

const Layout = ({ children }) => {
  return (
    <HomeLayout name="HashiBox" repository="hashibox">
      <EuiSpacer size="xl" />
      {children}
    </HomeLayout>
  )
};

export default Layout;
