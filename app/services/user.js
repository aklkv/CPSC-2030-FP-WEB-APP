import Ember from 'ember';

const { inject: { service }, RSVP, isEmpty } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),
  account: Ember.computed.alias('session.data.authenticated'),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const accountId = this.get('session.data.authenticated._id');
      if (!isEmpty(accountId)) {
        return this.get('store').find('user', accountId).then((account) => {
          this.set('account', account);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
