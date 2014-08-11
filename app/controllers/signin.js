import Ember from 'ember';

export default Ember.Controller.extend({
  username: null,
  password: null,
  errorMessage: null,

  actions: {
    signin: function() {
      var self = this;
      this.get('session')
      .signin(this.get('username'), this.get('password'))
      .then(function() {
        self.transitionToRoute('dashboard');
        self.reset();
      })
      .catch(function(error) {
        self.set('errorMessage', error.message);
      });
    }
  },

  reset: function() {
    this.setProperties({
          username: null,
          password: null,
          errorMessage: null
        });
  }
});