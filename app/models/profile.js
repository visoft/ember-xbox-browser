import DS from 'ember-data';

export default DS.Model.extend({
  hostId: DS.attr('number'),
  Gamertag: DS.attr('string'),
  GameDisplayName: DS.attr('string'),
  AppDisplayName: DS.attr('string'),
  Gamerscore: DS.attr('number'),
  GameDisplayPicRaw: DS.attr('string'),
  AppDisplayPicRaw: DS.attr('string'),
  AccountTier: DS.attr('string'),
  XboxOneRep: DS.attr('string'),
  PreferredColor: DS.attr('string'),
  TenureLevel: DS.attr('number'),
  isSponsoredUser: DS.attr('boolean')
});
