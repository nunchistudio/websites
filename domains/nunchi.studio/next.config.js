const NextConfig = require('@nunchistudio/base/next.config.js');
const withTranspile = require('next-transpile-modules')([
  '@nunchistudio/base',
]);

module.exports = withTranspile(Object.assign(NextConfig, {
  async redirects() {
    return [
      {
        source: '/blacksmith/:path*',
        destination: '/helix',
        permanent: true,
      },
    ]
  },
}));
