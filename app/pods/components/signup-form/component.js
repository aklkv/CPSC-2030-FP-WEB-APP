import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    submit() {
      let user = get(this, 'user');
      this.attrs.triggerSignUp(user);
    },
  },
});
