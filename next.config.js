const withCSS = require('@zeit/next-css');
const myposts = require('./src/blog-posts');

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
      '/hakkimda': { page: '/hakkimda' }
    }
    // dynamic, data-generated pages
    const content = myposts // assumes some markdown files in a `/content` folder, with frontmatter that offers a slug
    const posts = [] // build up array of objects for the top level list
    Object.entries(content).forEach(([filename]) => {
      // the filename becomes the slug
      paths[`/${filename}`] = {
        page: '/api/post/${postId}', query: { postId: filename }
      }
    })
    return paths
  }
});

