import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(), 
  actions: {
    create() {
      this.sendAction('create');
    }
  }
});
