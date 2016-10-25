var $ = require('jquery');
var views = require('./views/contact');
var models = require('./models/contact');

$(function(){
  var contactCollection = new models.ContactCollection();

  var contactForm = new views.ContactForm();
});
