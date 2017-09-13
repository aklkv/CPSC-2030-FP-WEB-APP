import { isEmpty } from '@ember/utils';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    if (!isEmpty(data.token)) {
      block('X-Token',  data.token);
    }
  },
});
