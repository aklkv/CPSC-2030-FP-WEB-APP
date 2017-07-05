import Ember from 'ember';

const {
  Component,
  inject: { service },
} = Ember;

export default Component.extend({
  session: service(),
  user: service(),
  actions: {
    onCreateCategory() {
      this.sendAction('createNewCategory');
    },
  },
});
