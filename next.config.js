const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/index': { page: '/index' },
      '/api/post': { page: '/api/post', query: { title: '[postId]' } },
    }
  },
});

