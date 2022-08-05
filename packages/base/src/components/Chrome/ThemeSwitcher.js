import { EuiButtonIcon } from '@elastic/eui';

import { useTheme } from '../Theme'

/**
 * Current theme is set in localStorage so that it persists between visits.
 */
const ThemeSwitcher = () => {
  const { colorMode, setColorMode } = useTheme();
  const isDarkTheme = colorMode === 'dark';

  const handleChangeTheme = (newTheme) => {
    setColorMode(newTheme);
  };

  return (
    <EuiButtonIcon
      color={isDarkTheme ? 'ghost' : 'text'}
      iconType={isDarkTheme ? 'sun' : 'moon'}
      aria-label="Change theme"
      onClick={() =>
        handleChangeTheme(isDarkTheme ? 'light' : 'dark')
      }></EuiButtonIcon>
  );
};

export default ThemeSwitcher;
