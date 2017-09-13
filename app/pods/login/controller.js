import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import EmberValidations from 'ember-validations';

export default Controller.extend(EmberValidations, {
  session: service(),
  notifications: service('notification-messages'),

  validations: {
    'email': {
      presence: {
        message: 'Email can not be blank',
      },
    },
    'password': {
      presence: {
        message: 'Password can not be blank',
      },
    },
  },
  actions: {
    authenticate() {
      get(this, 'notifications').clearAll();
      this.validate().then(() => {
        let data = this.getProperties('email', 'password');
        get(this, 'session').authenticate('authenticator:application', data)
          .catch((err) => {
            get(this, 'notifications').error(err.message);
          });
      }).catch((err) => {
        get(this, 'notifications').error(get(err, 'password.firstObject') || get(err, 'email.firstObject'));
      });

    },
  },
});
