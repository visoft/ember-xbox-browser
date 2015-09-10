import Ember from 'ember';

export default Ember.Component.extend({
  titles: null,
  titleSorting: ['name'],
  sortedCollection: Ember.computed.sort('titles', 'titleSorting')
});
