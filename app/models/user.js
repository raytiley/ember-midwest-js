import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),	

  workouts: DS.hasMany('workouts', {async: true})
});