const withCSS = require('@zeit/next-css');
const client = require('./client')

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
});

