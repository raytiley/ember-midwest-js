import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RaytileyENV.locationType
});

Router.map(function() {
	/**
	  * Routes should be sued for verbs
	**/
  this.route('signin');
  

  /**
    * Resources shoudl be used for nounes
  **/
  this.resource('dashboard');
  this.resource('profile', {path: '/user/:id'});
  this.resource('workouts', {path: '/workouts/:id'});

  /**
    * Nested Routes allow for nested uis
    * The following will create the following routes:
    *  activities.index
    *  activities.detail
    * 
    * both will be rendered in the activites.hbs {{outlet}}
  **/
  this.resource('activities', function() {
    this.route('detail', {path: ':id'});
  });
});

export default Router;
