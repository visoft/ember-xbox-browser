import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'https://xboxapi.com/v2',
  headers: Ember.computed(function() {
    return { 'X-AUTH': config.xboxApiKey };
  })
});
