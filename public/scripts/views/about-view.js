'use strict';
var app = app || {};

(function (module){
  var aboutView = {};
  module.aboutView = aboutView;
  
  aboutView.initAboutPage = () => app.showOnly('.about');
})(app);