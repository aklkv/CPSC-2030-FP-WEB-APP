import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  user: service(),
  actions: {
    createCategory() {
      let category = this.get('store').createRecord('category', {
        name: this.get('user.account.department'),
      });
      category.save();
    },
    deleteArticle(article) {
      article.destroyRecord();
    },
  },
});
