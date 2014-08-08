#Components

**Ember Guide**: http://emberjs.com/guides/components/

Components allow you to create custom html elements that can be used in your application. The behavior is defined in javascript. They are simalar to angular directives or polymer.

```js
/* gravatar-img.js */
import Ember from 'ember';
import md5 from 'crypto';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height'],
  width: '20px',
  height: '20px',
  default: 'wavatar',
  src: function() {
  	return 'http://www.gravatar.com/avatar/' + 
  		md5(this.get('email')) + 
  		'?d=' + this.get('default');
  }.property('email', 'hash')
})
```

```handlebars
{{! Usage }}
{{gravatar-img email="raytiley@gmail.com"}}
```