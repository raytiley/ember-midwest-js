import Ember from 'ember';
var $ = Ember.$;

export default Ember.Controller.extend({
  isAuthenticated: false,
  username: null,
  email: null,
  token: null,
  user: null,

  signin: function(username, password) {
    if (arguments.length === 2) {
      return this.signOnWithCredentials(username, password);
    }

    return this.signOnExisting();
  },

  signOnWithCredentials: function(username, password) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        url: 'login',
        data: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(function(data) {
        Ember.run(function() {
          self.store.find('user', data.userId).then(function(user) {
            self.setProperties({
              isAuthenticated: true,
              user: user,
              token: data.token
            });
            localStorage['session'] = JSON.stringify(data);
            resolve(self);
          });
        });
      })
      .fail(function(reason) {
        Ember.run(function() {
          reject(reason.responseJSON);
        });
      });
    });
  },

  signOnExisting: function() {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (localStorage['session']) {
        var session = JSON.parse(localStorage['session']);
        self.set('token', session.token);
        self.store.find('user', session.userId)
        .then(function(user) {
          self.setProperties({
            user: user,
            isAuthenticated: true
          });
          resolve(self);
        })
        .catch(function(reason) {
          reject(reason.responseJSON);
        });
      }
      else {
        reject();
      }
    });
  },

  signout: function() {
    this.setProperties({
      isAuthenticated: false,
      user: null,
      token: null,
    });
    localStorage.removeItem('session');
  }
});