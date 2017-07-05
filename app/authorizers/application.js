import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

const {
  isEmpty,
} = Ember;

export default Base.extend({
  authorize(data, block) {
    if (!isEmpty(data.token)) {
      block('X-Token',  data.token);
    }
  },
});
