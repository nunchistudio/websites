const selector = 'link[data-name="eui-theme"]';

export const defaultTheme = 'light';

function getAllThemes() {
  return [...document.querySelectorAll(selector)];
}

export function enableTheme(newThemeName) {
  const oldThemeName = getTheme();
  localStorage.setItem('theme', newThemeName);

  // Disable all theme links, except for the desired theme, which we enable.
  for (const themeLink of getAllThemes()) {
    themeLink.disabled = themeLink.dataset.theme !== newThemeName;
    themeLink['aria-disabled'] = themeLink.dataset.theme !== newThemeName;
  }

  // Add a class to the `body` element that indicates which theme we're using.
  // This allows any custom styling to adapt to the current theme.
  if (document.body.classList.contains(`appTheme-${oldThemeName}`)) {
    document.body.classList.replace(
      `appTheme-${oldThemeName}`,
      `appTheme-${newThemeName}`
    );
  } else {
    document.body.classList.add(`appTheme-${newThemeName}`);
  }
};

export function getTheme() {
  const storedTheme = localStorage.getItem('theme');

  return storedTheme || defaultTheme;
};

// The config is generated during the build and made available in a JSON string.
export const themeConfig = JSON.parse(process.env.THEME_CONFIG || {});
