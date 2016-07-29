import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArticle(){
      let author = this.get('store').createRecord('user',{
        name: 'Alexey Kulakov',
        department: 'HR'
      });

      let category = this.get('store').createRecord('category',{
        name: 'HR'
      });

      let article = this.get('store').createRecord('article', {
        title: 'Testing testing',
        date: new Date(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: author,
        category: category
      });
      category.save().then(() => author.save()).then(() => article.save());
    },
    deleteArticle(article){
      article.destroyRecord();
    }
  }
});
