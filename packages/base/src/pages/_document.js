import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { defaultTheme, themeConfig } from '../../lib/theme';

function themeLink(theme) {
  let disabledProps = {};

  if (theme.id !== defaultTheme) {
    disabledProps = {
      'disabled': true,
      'aria-disabled': true,
    };
  }

  return (
    <link rel="stylesheet" href={`/${theme.publicPath}`}
      key={theme.id}
      data-name="eui-theme"
      data-theme-name={theme.name}
      data-theme={theme.id}
      {...disabledProps}
    />
  );
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="referrer" content="strict-origin" />

          <meta name="eui-styles" />
          {themeConfig.availableThemes.map(each => themeLink(each))}
          <meta name="eui-styles-utility" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
