import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    return Ember.RSVP.hash({
      author: this.get('store').find('user', params.authorId)
    });
  }
});
