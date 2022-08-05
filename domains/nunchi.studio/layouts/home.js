import { EuiSpacer } from '@elastic/eui';

import { HomeLayout } from '@nunchistudio/base';

const Layout = ({ children }) => {
  return (
    <HomeLayout name="Nunchi" withLogo={true}
      logoLight="https://www.nunchi.studio/assets/nunchi/logo.svg"
      logoDark="https://www.nunchi.studio/assets/nunchi/logo-white.svg"
    >
      <EuiSpacer size="xl" />
      {children}
    </HomeLayout>
  )
};

export default Layout;
