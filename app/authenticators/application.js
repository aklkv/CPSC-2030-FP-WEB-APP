import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {
  inject: { service },
  isEmpty,
  RSVP: { resolve },
} = Ember;

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
