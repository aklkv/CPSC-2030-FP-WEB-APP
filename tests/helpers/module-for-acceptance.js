import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { Promise } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach(...args) {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach(this, ...args);
      }
    },

    afterEach(...args) {
      let afterEach = options.afterEach && options.afterEach(this, ...args);
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
