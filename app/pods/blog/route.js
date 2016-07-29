import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles:  this.store.findAll('article'),
      categories:  this.store.findAll('category'),
      authors: this.store.findAll('user')
    });
  }
});
