import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  user: service(),
  actions: {
    delete(article) {
      this.sendAction('delete', article);
    },
  },
});
