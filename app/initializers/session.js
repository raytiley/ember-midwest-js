import Session from '../utils/session';

export default {
  name: 'session',
  after: 'store',
  initialize: function(container, app) {
    // register our session
    container.register('session:main', Session);
    
    // inject our session so it is availble in routes controllers and adapters
    app.inject('controller', 'session', 'session:main');
    app.inject('route', 'session', 'session:main');
    app.inject('adapter', 'session', 'session:main');

    // register the store in the session so we can access user records
    app.inject('session', 'store', 'store:main');
    
  }
};
