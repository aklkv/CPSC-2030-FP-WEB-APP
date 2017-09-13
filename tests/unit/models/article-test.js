import { moduleForModel, test } from 'ember-qunit';

moduleForModel('article', 'Unit | Model | article', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:category'],
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
