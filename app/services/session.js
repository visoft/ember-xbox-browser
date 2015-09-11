import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  xuid: null,
  error: null,

  setup(gamerTag) {
    var adapter = this.get('store').adapterFor('application');
    var _this = this;
    return adapter.ajax('https://xboxapi.com/v2/xuid/' + gamerTag, 'GET')
           .then(function(response) {
              _this.set('xuid', response);
           }, function(reason) {
              if(reason.errors[0].status === '404') {
                _this.set('error', 'Unable to find user');
              }
           });
  }
});
