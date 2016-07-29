import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      author: this.store.find('user', params.authorId),
      authors: this.store.findAll('user'),
      categories: this.store.findAll('category')
    });
  }
});
