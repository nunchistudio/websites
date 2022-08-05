import { EuiSpacer } from '@elastic/eui';

import { HomeLayout } from '@nunchistudio/base';

const Layout = ({ children }) => {
  return (
    <HomeLayout name="Temporal Land" repository="temporal-land">
      <EuiSpacer size="xl" />
      {children}
    </HomeLayout>
  )
};

export default Layout;
