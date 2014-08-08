#Controllers

**Ember Guide:** http://emberjs.com/guides/controllers/

Controllers decorate models and can handle actions. They sit between a model and the template and maintain application state.

```js
import Ember from 'ember';

export default Ember.ObjectController.extend({
  // Model is set by Route
  model: {
    firstName: 'ray',
    lastName: 'tiley',
  },
  
  // firstName and lastName are proxied to model
  fullName: function() {
  	return "%@ %@".fmt(this.get('firstName'), this.get('lastName'));
  }.property('firstName', 'lastName')

  // actions from views / templates can be handeled
  actions: {
    signin: function() {
      // do some signing in
    }
  }

});
```