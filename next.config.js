const withCSS = require('@zeit/next-css');
import blogposts from './src/blog-posts'

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: async function () {
    // pages we know about beforehand
    const paths = {
      '/': { page: '/' },
      '/Hakkimda': { page: '/Hakkimda' }
    }
    const blogs = blogposts
    Object.entries(blogs).forEach(([postId]) => {
      paths[`/${postId}`] = {
        page: '/api/post/[postId]', query: { postId: postId }
      }
    })
    return paths
  }
});

