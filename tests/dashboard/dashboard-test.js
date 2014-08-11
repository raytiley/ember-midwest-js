import Ember from 'ember';
import {test} from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Dashboard Recent Activities', {
	setup: function() {
		App = startApp();
	},
	teardown: function() {
		Ember.run(App, App.destroy);
	}
});

test("New Activites are at top", function() {
	var firstItem;
	expect(2);
	visit('/signin');
	fillIn('input[type=text]', 'raytiley');
	fillIn('input[type=password]', 'test');
	click('button');
	
	andThen(function() {
		equal(currentURL(), '/dashboard');
		firstItem = find('.media')[0];
	});

	click('.log-workout');
	fillIn('select', '2'); //Cheating
	click('button[type=submit]');

	andThen(function() {
		notEqual(firstItem, find('.media')[0]);
	});
});