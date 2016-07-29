import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
  session: Ember.inject.service(),
  host: `${config.apiURL}`,
  headers: Ember.computed('session.data.authenticated.token', {
    get() {
      let headers = {};
      const authToken = this.get('session.data.authenticated.token');
      if (authToken) {
        headers['X-Token'] = authToken;
      }
      return headers;
    }
  })
});
