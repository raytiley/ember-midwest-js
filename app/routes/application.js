import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('activity');
  },

  actions: {
    openModal: function(name) {
      this.render(name, {into: 'application', outlet: 'modal'});
    },

    closeModal: function() {
      this.disconnectOutlet({outlet: 'modal', parentView: 'application'});
    }
  }
});