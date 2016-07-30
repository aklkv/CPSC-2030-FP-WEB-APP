import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

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
        //   this.notifications.error(err.message);
        // });
        this.transitionToRoute('login');
        this.notifications.success('Hey Hey! Welcome, Please go ahead and login now!');
      }).catch((err) => {
        this.notifications.error(err.message);
      });
    }
  }
});
