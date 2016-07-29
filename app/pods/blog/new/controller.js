import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service(),
  actions: {
    create() {
      let newArticle = this.get('model');
      newArticle.set('date', new Date());
      this.get('store').query('category', {
        filter: {
          name: this.get('user.account.department')
        }
      }).then((item) => {
        newArticle.set('category', item.get('firstObject'));
        newArticle.set('author', this.get('user.account'));
        newArticle.save().then(() => {
          this.transitionToRoute('blog');
        });
      });
    }
  }
});
