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
      '/online-egitime-gecmek': { page: '/api/post', query: { title: 'online-egitime-gecmek' } },
      '/bahar-donemi-3sinif-elektrik-elektronik': { page: '/api/post', query: { title: 'bahar-donemi-3sinif-elektrik-elektronik' } },
      '/elektrik-ve-elektronik-muhendisligi-guz-donemi': { page: '/api/post', query: { title: 'elektrik-ve-elektronik-muhendisligi-guz-donemi' } },
      '/online-egitime-gecmek': { page: '/api/post', query: { title: 'motivasyon-arayisi' } },
      '/nasil-staj-bulurum': { page: '/api/post', query: { title: 'nasil-staj-bulurum' } },
      '/neymis-bu-crossfit': { page: '/api/post', query: { title: 'neymis-bu-crossfit' } },
      '/podcast-cilginligi': { page: '/api/post', query: { title: 'podcast-cilginligi' } },
      '/yazilima-nereden-baslamaliyim': { page: '/api/post', query: { title: 'yazilima-nereden-baslamaliyim' } }
    }
    return paths
  }
});

