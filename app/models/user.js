import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  department: attr('string'),
  password: attr('string'),
  articles: hasMany('article'),
  category: belongsTo(),
});
