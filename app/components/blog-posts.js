import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article){
      this.sendAction('delete', article);
    }
  }
});
