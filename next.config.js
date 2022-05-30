module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
    }
    }
};
