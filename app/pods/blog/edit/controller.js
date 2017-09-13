import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

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
