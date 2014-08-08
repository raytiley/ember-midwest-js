#Templates

**Ember Guide**: http://emberjs.com/guides/templates/handlebars-basics/

Templates use Handlebars to define html with Handlebars expression to display data from the controller or model backing the template.

```handlebars
<ul>
{{#each post in posts}}
  <li>{{post.title}}</li>
{{else}}
  No posts :(
{{/each}}
</ul>
```