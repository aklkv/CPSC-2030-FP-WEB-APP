import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  user: Ember.inject.service(),
  actions: {
    createCategory() {
      let category = this.get('store').createRecord('category', {
        name: this.get('user.account.department')
      });
      category.save();
    },
    deleteArticle(article) {
      article.destroyRecord();
    }
  }
});
