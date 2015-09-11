import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectToRoute(route, params) {
      if (params) {
        this.transitionTo(route, params);
      } else {
        this.transitionTo(route);
      }
    }
  }
});
