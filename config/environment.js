/* jshint node: true */

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'cpsc-2030-fp-web-app',
    podModulePrefix: 'cpsc-2030-fp-web-app/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    moment: {
      allowEmpty: true
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiURL = 'https://api.aklkv.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiURL = 'https://api.aklkv.com';
  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'blog',
    routeIfAlreadyAuthenticated: 'blog'
  };

  return ENV;
};
