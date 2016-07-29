import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {

    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data._id)) {
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
    }).catch((res) => {
      return new Error(res.message);
    });

  },
  invalidate(/* data */) {

    return this.get('ajax').request('/logout').then((res) => {
      return res.data;
    }).catch((res) => {
      return new Error(res.message);
    });
  }
});
