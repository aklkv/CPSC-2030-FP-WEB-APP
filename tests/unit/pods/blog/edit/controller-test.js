import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:blog/edit', 'Unit | Controller | blog/edit', {
  // Specify the other units that are required for this test.
  needs: ['service:user'],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
