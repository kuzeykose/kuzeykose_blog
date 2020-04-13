const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/Hakkimda': { page: '/Hakkimda' },
      '/online-egitime-gecmek': { page: '/online-egitime-gecmek' }
    }
    return paths
  }
});

