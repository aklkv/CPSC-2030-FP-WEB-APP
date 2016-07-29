import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', { path: '/' }, function() {
    this.route('new');
    this.route('edit', { path: 'edit/*articleId' });
    this.route('authors', { path: 'authors/*authorId' });
    this.route('categories', { path: 'categories/*categoryId' });
  });
  this.route('login');
  this.route('sign-up');
});

export default Router;
