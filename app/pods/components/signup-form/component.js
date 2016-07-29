import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      let user = this.get('user');
      this.attrs.triggerSignUp(user);
    }
  }
});
