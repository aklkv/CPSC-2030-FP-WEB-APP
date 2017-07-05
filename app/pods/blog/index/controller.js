import Ember from 'ember';

const {
  Controller,
  inject: { service },
} = Ember;

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
