import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    go(gamertag) {
      this.sendAction('redirect', 'gamer', gamertag);
    }
  }
});
