import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  date: attr('date'),
  author: belongsTo('user'),
  category: belongsTo('category')
});
