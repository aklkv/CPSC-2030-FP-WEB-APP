import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  user: Ember.inject.service(),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  },
  init() {
    this._super();
    Ember.run.schedule('afterRender', this, () => Ember.$(document).foundation());
  }
});
