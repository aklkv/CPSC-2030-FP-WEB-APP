import Ember from 'ember';
import EmberValidations from 'ember-validations';

const {
  Controller,
  inject: { service },
  get,
} = Ember;

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
