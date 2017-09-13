import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    return hash({
      category: this.get('store').find('category', params.categoryId),
      categories: this.store.findAll('category'),
      authors: this.store.findAll('user'),
    });
  },
});
