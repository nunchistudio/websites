import { EuiSpacer } from '@elastic/eui';

import { HomeLayout } from '@nunchistudio/base';

const Layout = ({ children }) => {
  return (
    <HomeLayout name="Nunchi" withLogo={true}
      logoLight="/images/nunchi-light.svg"
      logoDark="/images/nunchi-dark.svg"
    >
      <EuiSpacer size="xl" />
      {children}
    </HomeLayout>
  )
};

export default Layout;
