import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const {
  Route,
  inject: { service },
  get,
} = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      get(this, 'session').authenticate('authenticator:application', email, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    },
  },
});
