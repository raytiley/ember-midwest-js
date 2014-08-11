import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var self = this;
    return this.get('session')
               .signin()
               .catch(function() {
                self.transitionTo('signin');
              });
  }
});
