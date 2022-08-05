const NextConfig = require('@nunchistudio/base/next.config.js');
const withTranspile = require('next-transpile-modules')([
  '@nunchistudio/base',
]);

module.exports = withTranspile(NextConfig);
