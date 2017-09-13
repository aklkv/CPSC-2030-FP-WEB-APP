import Service, { inject as service } from '@ember/service';
import { resolve } from 'rsvp';
import { isEmpty } from '@ember/utils';
import { alias } from '@ember/object/computed';

export default Service.extend({
  session: service(),
  store: service(),
  account: alias('session.data.authenticated'),

  loadCurrentUser() {
    return resolve((resolve, reject) => {
      if (!isEmpty(this.get('session.data.authenticated._id'))) {
        return this.get('store').find('user', this.get('session.data.authenticated._id')).then((account) => {
          this.set('account', account);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  },
});
