import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      category: this.get('store').find('category', params.categoryId),
      categories: this.store.findAll('category'),
      authors: this.store.findAll('user')
    });
  }
});
