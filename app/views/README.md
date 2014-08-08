#Views

**Ember Guide**: http://emberjs.com/guides/views/

Views manage DOM lifecycle and translate primitive browser events into semantic application events. Unless your doing some low level work you probably want to use a component instead of a view.

```js
import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		// do something with the dom
	},

	willDestroyElement: function() {
		// clean up what we did with the dom
	},

	click: function() {
		// do something with clicks
	}
})
```