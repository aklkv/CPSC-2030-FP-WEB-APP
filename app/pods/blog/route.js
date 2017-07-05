import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
} = Ember;

export default Route.extend({
  model() {
    return hash({
      articles: this.store.findAll('article'),
      categories: this.store.findAll('category'),
      authors: this.store.findAll('user'),
    });
  },
});
