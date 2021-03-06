import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  user: service(),
  actions: {
    create() {
      let newArticle = get(this, 'model');
      newArticle.set('createdAt', new Date());
      get(this, 'store').query('category', {
        filter: {
          name: get(this, 'user.account.department'),
        },
      }).then((item) => {
        if (item.get('firstObject')) {
          newArticle.set('category', item.get('firstObject'));
          newArticle.set('author', get(this, 'user.account'));
          newArticle.save().then(() => {
            this.transitionToRoute('blog');
          });
        } else {
          let category = get(this, 'store').createRecord('category', {
            name: get(this, 'user.account.department'),
          });
          category.save().then(() => {
            newArticle.set('category', category);
            newArticle.set('author', get(this, 'user.account'));
            newArticle.save().then(() => {
              this.transitionToRoute('blog');
            });
          });
        }
      });
    },
  },
});
