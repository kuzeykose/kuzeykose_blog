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
      '/[postId]': { page: '${postId}' }
    }
    //   const blogs = blogposts
    //   Object.entries(blogs).forEach(([postId]) => {
    //     paths[`/${postId}`] = {
    //       page: '/api/post/[postId]', query: { postId: postId }
    //     }
    //   })
    return paths
  }
});

