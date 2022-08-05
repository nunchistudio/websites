import NextHead from 'next/head';

import {
  EuiHeader,
  EuiImage, EuiText, EuiLink,
  EuiSpacer,
  useGeneratedHtmlId,
} from '@elastic/eui';

import { ThemeSwitcher, useTheme } from '../../';
import GitHub from '../components/GitHub';

import { homeLayout } from './home.styles';

const HomeLayout = (props) => {
  const { colorMode } = useTheme();

  let color = '#000';
  let headerMode = 'default';
  if (colorMode == 'dark') {
    color = '#fff';
    headerMode = 'dark';
  }

  let icon = (
    <EuiText style={{ marginLeft: '15px' }}>
      <EuiLink href="/" style={{ color: color }}>
        <strong>{props.name}</strong>
      </EuiLink>
    </EuiText>
  );

  if (props.withLogo == true) {
    let logo = props.logoLight;
    if (colorMode == 'dark') {
      logo = props.logoDark;
    }

    icon = (
      <>
        <EuiImage src={logo} height={20} alt="Nunchi" style={{ marginLeft: '15px' }} />
      </>
    );
  }

  const styles = homeLayout();

  return (
    <>
      <NextHead>
        <title>{props.name}</title>
        <meta name="title" content={props.name} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.name} />
        <meta name="twitter:card" content="summary" />
      </NextHead>
      <div css={styles.wrapper}>
        <EuiHeader
          theme={headerMode}
          position="fixed"
          sections={[
            {
              borders: 'none',
              items: [
                icon,
              ],
            },
            {
              borders: 'none',
              items: [
                <GitHub repository={props.repository} />,
                <ThemeSwitcher key={useGeneratedHtmlId()} />,
              ],
            },
          ]}
        />

        <EuiSpacer size="xl" />
        <EuiSpacer size="xl" />
        <EuiSpacer size="xl" />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          {props.children}
        </div>
      </div>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
    </>
  );
};

export default HomeLayout;
