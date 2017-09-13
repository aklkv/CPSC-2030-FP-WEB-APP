import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
  session: service(),
  host: `${config.apiURL}`,
  headers: computed('session.data.authenticated.token', {
    get() {
      let headers = {};

      if (this.get('session.data.authenticated.token')) {
        headers['X-Token'] = this.get('session.data.authenticated.token');
      }
      return headers;
    },
  }),
});
