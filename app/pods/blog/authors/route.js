import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    return hash({
      author: this.store.find('user', params.authorId),
      authors: this.store.findAll('user'),
      categories: this.store.findAll('category'),
    });
  },
});
