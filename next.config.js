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
      '/api/post/online-egitime-gecmek': { page: '/api/post/online-egitime-gecmek' }
    }
    return paths
  }
});

