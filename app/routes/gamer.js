import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model(params) {
    var xhr = this.get('session').setup(params.gamer_tag);
    return xhr.then(() => {
      if (this.get('session.error')) {
        return this.transitionTo('gamer.error');
      }
      else {
        return Ember.RSVP.hash({
          profile: this.store.find('profile', this.get('session.xuid')),
          xbox360Titles: this.store.query('xbox-title', { xuid: this.get('session.xuid') }),
          xboxOneTitles: this.store.query('one-title', { xuid: this.get('session.xuid') }),
        });
      }
    });
  }
});
