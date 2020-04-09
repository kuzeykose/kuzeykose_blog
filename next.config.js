const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },

  exportPathMap: async function (defaultPathMap) {
    const path = await client
      // get all the posts and return those with slugs
      .fetch('*[_type == "post"].slug.current')
      .then(data =>
        // use reduce to build an object with routes
        // and select the blog.js file, and send in the
        // correct query paramater.
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
          }),
          {}
        )
      )
      .catch(console.error)
    return path
  }
});

