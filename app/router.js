import EmberRouter from '@ember/routing/router';
import config from './config/environment';

// eslint-disable-next-line ember-suave/no-direct-property-access
const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
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
