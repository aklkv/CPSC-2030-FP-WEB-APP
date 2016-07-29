import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  session: Ember.inject.service(),

  validations: {
    'email': {
      presence: {
        message: 'Email can not be blank'
      }
    },
    'password': {
      presence: {
        message: 'Password can not be blank'
      }
    }
  },
  actions: {
    authenticate() {
      this.notifications.clearAll();
      this.validate().then(() => {
        let data = this.getProperties('email', 'password');
        this.get('session').authenticate('authenticator:application', data)
        .catch((err) => {
          this.notifications.error( err.message );
        });
      }).catch((err) => {
        this.notifications.error( Ember.get(err, 'password.firstObject') || Ember.get(err, 'email.firstObject') );
      });

    }
  }
});
