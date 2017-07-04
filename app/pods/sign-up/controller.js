import Ember from 'ember';

const {
  Controller,
  inject: { service },
  get,
} = Ember;

export default Controller.extend({
  session: service(),
  notifications: service('notification-messages'),

  actions: {
    signUp(user) {

      let newUser = user;
      newUser.save().then(()=> {
        // let data = {
        //   email: newUser.get('email'),
        //   password: newUser.get('password')
        // };
        // this.get('session').authenticate('authenticator:application', data)
        // .catch((err) => {
        //   get(this, 'notifications').error(err.message);
        // });
        this.transitionToRoute('login');
        get(this, 'notifications').success('Hey Hey! Welcome, Please go ahead and login now!');
      }).catch((err) => {
        get(this, 'notifications').error(err.message);
      });
    },
  },
});
