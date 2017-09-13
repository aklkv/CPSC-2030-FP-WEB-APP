import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

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
