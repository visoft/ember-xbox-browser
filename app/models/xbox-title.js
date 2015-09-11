import DS from 'ember-data';

export default DS.Model.extend({
  lastPlayed: DS.attr('date'),
  currentAchievements: DS.attr('number'),
  currentGamerscore: DS.attr('number'),
  sequence: DS.attr('number'),
  titleId: DS.attr('number'),
  titleType: DS.attr('number'),
  name: DS.attr('string'),
  totalAchievements: DS.attr('number'),
  totalGamerscore: DS.attr('number')
});
