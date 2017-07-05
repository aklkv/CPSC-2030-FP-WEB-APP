import Ember from 'ember';

const {
  Component,
  get,
} = Ember;

export default Component.extend({
  actions: {
    submit() {
      let user = get(this, 'user');
      this.attrs.triggerSignUp(user);
    },
  },
});
