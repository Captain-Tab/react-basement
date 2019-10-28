const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('http://localhost:3000/azure/list', {
      target: 'https://azure.microsoft.com/en-us/status/',
      https: true,
    }),
  );
};
