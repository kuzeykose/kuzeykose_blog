const withCSS = require('@zeit/next-css');
const jdown = require('jdown');

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
      '/hakkimmda': { page: '/hakkimda' }
    }
    // dynamic, data-generated pages
    const content = await jdown('src/posts') // assumes some markdown files in a `/content` folder, with frontmatter that offers a slug
    const posts = [] // build up array of objects for the top level list
    Object.entries(content).forEach(([filename, fileContent]) => {
      // the filename becomes the slug
      paths[`/${filename}`] = {
        page: '/[postId]', query: {
          postId: filename,
          ...fileContent
        }
      }
    })
    return paths
  }
});

