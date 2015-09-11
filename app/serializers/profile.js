import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id) {
    return {
      data: {
        id: id,
        type: 'profile',
        attributes: payload
      }
    };
  }
});
