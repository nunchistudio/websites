const crypto = require('crypto');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const { IgnorePlugin } = require('webpack');

const withMarkdoc = require('@markdoc/next.js');

const themeConfig = buildThemeConfig();

module.exports = withMarkdoc({ mode: 'static' })({
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ['js', 'md'],
  compiler: {
    emotion: true,
  },
  images: {
    loader: 'custom',
  },
  env: {
    THEME_CONFIG: JSON.stringify(themeConfig),
  },

  webpack(config, { isServer }) {
    if (isServer) {
      config.externals = config.externals.map(eachExternal => {
        if (typeof eachExternal !== 'function') {
          return eachExternal;
        }

        return (context, callback) => {
          if (context.request.indexOf('@elastic/eui') > -1) {
            return callback();
          }

          return eachExternal(context, callback);
        };
      });

      const definePluginId = config.plugins.findIndex(
        p => p.constructor.name === 'DefinePlugin'
      );

      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function () {},
      };
    }

    config.plugins.push(
      new CopyWebpackPlugin({ patterns: themeConfig.copyConfig }),
      new IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );

    config.resolve.mainFields = ['module', 'main'];
    return config;
  },
});

function buildThemeConfig() {
  const themeFiles = glob.sync(
    path.join(
      __dirname,
      '..', '..', '..',
      'node_modules',
      '@elastic',
      'eui',
      'dist',
      'eui_theme_*.min.css'
    )
  );

  const themeConfig = {
    availableThemes: [],
    copyConfig: [],
  };

  for (const each of themeFiles) {
    const basename = path.basename(each, '.min.css');

    const themeId = basename.replace(/^eui_theme_/, '');

    const themeName =
      themeId[0].toUpperCase() + themeId.slice(1).replace(/_/g, ' ');

    const publicPath = `themes/${basename}.${hashFile(each)}.min.css`;
    const toPath = path.resolve( `public`, `themes`, `${basename}.${hashFile(each)}.min.css`);

    themeConfig.availableThemes.push({
      id: themeId,
      name: themeName,
      publicPath,
    });

    themeConfig.copyConfig.push({
      from: each,
      to: toPath,
    });
  }

  return themeConfig;
}

function hashFile(filePath) {
  const hash = crypto.createHash(`sha256`);
  const fileData = fs.readFileSync(filePath);
  hash.update(fileData);

  const fullHash = hash.digest(`hex`);
  return fullHash.substr(0, 20);
}
