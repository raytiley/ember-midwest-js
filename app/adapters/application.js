import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: function() {
    var token = this.get('session.token');
    if (token) {
      return {
        token: token
      };
    }
  }.property('session.token')
});