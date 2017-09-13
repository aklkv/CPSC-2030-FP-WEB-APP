import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('authors-widget', 'Integration | Component | authors widget', {
  integration: true,
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{authors-widget}}`);

  assert.equal(this.$().text().trim(), `Authors
  No Authors Yet`);
});
