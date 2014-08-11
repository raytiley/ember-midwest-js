import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height'],
  width: '20px',
  height: '20px',
  default: 'wavatar',
  src: function() {
    
    return 'http://www.gravatar.com/avatar/' + 
      md5(this.get('email')) + 
      '?d=' + 
      this.get('default');

  }.property('email')
});
