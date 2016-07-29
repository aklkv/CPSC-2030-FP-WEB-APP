import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    signeUp(user) {

      let newUser = user;
      newUser.save().catch((err) => {
        this.notifications.error(err.message);
        console.log(err);
      })
      .then(()=> {
        let data = {
          email: newUser.get('email'),
          password: newUser.get('password')
        };
        this.get('session').authenticate('authenticator:application', data)
        .catch((err) => {
          this.notifications.error(err.message);
        });
      });
    }
  }
});
