// app/authorizers/application.js
import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
  authorize(data, block) {
    if (!Ember.isEmpty(data.token)) {
      block('X-Token',  data.token);
    }
  }
});
