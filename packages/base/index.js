import Chrome from './src/components/Chrome';
import ThemeSwitcher from './src/components/Chrome/ThemeSwitcher';
import { Theme, useTheme } from './src/components/Theme';

import { globalStyles } from './src/styles/global.styles';

import HomeLayout from './src/layouts/home';
import DocsLayout from './src/layouts/docs';

import NextDocument from './src/pages/_document';
import NextError from './src/pages/_error';
import Next404 from './src/pages/404';
import Join from './src/pages/join';

export {
  Chrome, ThemeSwitcher, Theme, useTheme, globalStyles,
  HomeLayout, DocsLayout,
  NextDocument, NextError, Next404,
  Join,
};
