import Ember from 'ember';

const {
  Controller,
  inject: { service },
} = Ember;

export default Controller.extend({
  user: service(),
  actions: {
    update() {
      if (this.get('model.hasDirtyAttributes')) {
        this.get('model').save().then(() => {
          this.transitionToRoute('blog');
        });
      }
    },
  },
});
