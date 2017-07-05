import { moduleFor, test } from 'ember-qunit';
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';

moduleFor('controller:login', 'Unit | Controller | login', {
  // Specify the other units that are required for this test.
  needs: ['service:session'],
  beforeEach() {
    this.register('service:notification-messages', NotificationsService);
    this.inject.service('notification-messages', { as: 'notifications' });
  },
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
