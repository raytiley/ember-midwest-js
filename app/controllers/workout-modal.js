import Ember from 'ember';

export default Ember.Controller.extend({
  workoutDuration: 30,
  activities: function() {
    return this.store.find('activity');
  }.property(),

  reset: function() {
    this.setProperties({
      workoutDuration: 30,
      selectedActivity: null
    });
  },

  actions: {
    logWorkout: function() {
      var duration = this.get('workoutDuration');
      var activity = this.get('selectedActivity');
      var self = this;
      if (activity) {
        var user = this.store.find('user', 1).then(function(user) {
          self.store.createRecord('workout', {
            duration: duration,
            user: user,
            activity: activity,
            date: new Date()
          })
          .save()
          .then(function(workout) {
            user.get('workouts').pushObject(workout);
            self.reset();
            self.send('closeModal');
          });
        });
      }
    }
  }
});