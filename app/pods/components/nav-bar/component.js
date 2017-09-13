import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { schedule } from '@ember/runloop';
import { get } from '@ember/object';
import $ from 'jquery';

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
