import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service(),
  actions: {
    update() {
      if (this.get('model.hasDirtyAttributes')) {
        this.get('model').save().then(() => {
          this.transitionToRoute('blog');
        });
      }
    }
  }
});
