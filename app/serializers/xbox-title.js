import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'titleId',
  modelNameFromPayloadKey: function(payloadKey) {
    if (payloadKey === 'titles') {
      return this._super('xbox-titles', '');
    } else {
     return this._super(payloadKey);
    }
  }
});
