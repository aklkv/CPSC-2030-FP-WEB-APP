import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
} = Ember;

export default Route.extend({
  model(params) {
    return hash({
      author: this.store.find('user', params.authorId),
      authors: this.store.findAll('user'),
      categories: this.store.findAll('category'),
    });
  },
});
