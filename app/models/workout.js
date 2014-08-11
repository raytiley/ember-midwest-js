import DS from 'ember-data';

export default DS.Model.extend({
  duration: DS.attr('number'),
  date: DS.attr('date'),

  user: DS.belongsTo('user'),
  activity: DS.belongsTo('activity')
});
