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
      '/api/post/online-egitime-gecmek': { page: '/api/post', query: { title: 'online-egitime-gecmek' } },
      '/api/post/bahar-donemi-3sinif-elektrik-elektronik': { page: '/api/post', query: { title: 'bahar-donemi-3sinif-elektrik-elektronik' } },
      '/api/post/elektrik-ve-elektronik-muhendisligi-guz-donemi': { page: '/api/post', query: { title: 'elektrik-ve-elektronik-muhendisligi-guz-donemi' } },
      '/api/post/online-egitime-gecmek': { page: '/api/post', query: { title: 'motivasyon-arayisi' } },
      '/api/post/nasil-staj-bulurum': { page: '/api/post', query: { title: 'nasil-staj-bulurum' } },
      '/api/post/neymis-bu-crossfit': { page: '/api/post', query: { title: 'neymis-bu-crossfit' } },
      '/api/post/podcast-cilginligi': { page: '/api/post', query: { title: 'podcast-cilginligi' } },
      '/api/post/yazilima-nereden-baslamaliyim': { page: '/api/post', query: { title: 'yazilima-nereden-baslamaliyim' } }
    }
    return paths
  }
});

