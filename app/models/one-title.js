import DS from 'ember-data';

export default DS.Model.extend({
  lastUnlock: DS.attr('date'),
  titleId: DS.attr('number'),
  serviceConfigId: DS.attr('string'),
  titleType: DS.attr('string'),
  platform: DS.attr('string'),
  name: DS.attr('string'),
  earnedAchievements: DS.attr('number'),
  currentGamerscore: DS.attr('number'),
  maxGamerscore: DS.attr('number')
});
