import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  Route,
  inject: { service },
  get,
} = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  user: service(),
  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => get(this, 'session').invalidate());
  },

  _loadCurrentUser() {
    return get(this, 'user').loadCurrentUser();
  },
});
