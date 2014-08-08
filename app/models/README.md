#Models

**Ember Guide**: http://emberjs.com/guides/models/

Models define the entitys of your application. They are optional but help with mangaing fetching, persisting, and searching records from the server.

```js
import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  activity: DS.belongsTo('activity'),
  duration: DS.attr('number'),
  date: DS.attr('date')
});
```