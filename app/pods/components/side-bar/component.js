import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  user: Ember.inject.service(),
  actions: {
    onCreateCategory() {
      this.sendAction('createNewCategory');
    }
  }
});
