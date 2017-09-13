import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { resolve } from 'rsvp';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: service(),

  restore(data) {

    return resolve((resolve, reject) => {
      if (!isEmpty(data._id)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(data) {

    return this.get('ajax').post('/login', { data }).then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      throw new Error(res.message);
    }).catch((res) => {
      throw new Error(res.message);
    });

  },
  invalidate(/* data */) {

    return this.get('ajax').request('/logout').then((res) => {
      return res.data;
    }).catch((res) => {
      return new Error(res.message);
    });
  },
});
