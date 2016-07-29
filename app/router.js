import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', { path: '/', resetNamespace: true}, function() {
    this.route('new');
  });
  this.route('authors', {path: 'authors/:authorId'});
  this.route('signe-up');
  this.route('login');
});

export default Router;
