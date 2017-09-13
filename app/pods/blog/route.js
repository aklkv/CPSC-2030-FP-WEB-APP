import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      articles: this.store.findAll('article'),
      categories: this.store.findAll('category'),
      authors: this.store.findAll('user'),
    });
  },
});
