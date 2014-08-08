#Handlebars Helpers

Ember Guide: http://emberjs.com/guides/templates/writing-helpers/

Helpers are functions that output strings that are placed into the rendered html of the page. They are often used as utilities for tasks like formatting dates.

```js
import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return value.capitalize();
});
``` 