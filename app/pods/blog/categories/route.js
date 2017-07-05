import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
} = Ember;

export default Route.extend({
  model(params) {
    return hash({
      category: this.get('store').find('category', params.categoryId),
      categories: this.store.findAll('category'),
      authors: this.store.findAll('user'),
    });
  },
});
