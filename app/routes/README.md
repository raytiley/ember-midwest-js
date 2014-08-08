#Routes

**Ember Guide**: http://emberjs.com/guides/routing/

Route objects define what happens when a user enters a specific state of your application. This state is usually represented by the URL. Active routes can also handle actions.

```js
import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function(transition, queryParams) {
  	// is user logged in
  },

  model: function() {
    this.store.find('post');
  },

  afterModel: function(posts, transition) {
  	// maybe redirect if only one result
  }

  actions: {
    signout: function() {
      //handle signout
    }
  }
});
```