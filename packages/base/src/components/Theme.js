import {
  createContext, useContext,
  useState, useEffect,
} from 'react';

import { getTheme, enableTheme } from '../../lib/theme';

/**
 * React context for storing theme-related data and callbacks.
 * `colorMode` is `light` or `dark` and will be consumed by various downstream
 * components, including `EuiProvider`.
 */
export const GlobalProvider = createContext({});

export const Theme = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  // On initial mount in the browser, use any theme from local storage.
  useEffect(() => {
    setColorMode(getTheme());
  }, []);

  // Enable the correct theme when colorMode changes.
  useEffect(() => enableTheme(colorMode), [colorMode]);

  return (
    <GlobalProvider.Provider value={{ colorMode, setColorMode }}>
      {children}
    </GlobalProvider.Provider>
  );
};

export const useTheme = () => {
  return useContext(GlobalProvider);
};
