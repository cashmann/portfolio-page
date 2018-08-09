'use strict';
var app = app || {};

(function (module){
  const homeView = {};
  module.homeView = homeView;

  homeView.initIndexPage = () => app.showOnly('.intro');
})(app);