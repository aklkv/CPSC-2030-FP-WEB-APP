import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  user: Ember.inject.service(),
  actions: {
    delete(article) {
      this.sendAction('delete', article);
    }
  }
});
