import Ember from 'ember';

const {
  Component,
  inject: { service },
  run: { schedule },
  get,
  $,
} = Ember;

export default Component.extend({
  session: service(),
  user: service(),
  actions: {
    invalidateSession() {
      get(this, 'session').invalidate();
    },
  },
  init() {
    this._super();
    schedule('afterRender', this, () => $(document).foundation());
  },
});
