'use strict';

var app = app || {};

(function (module){

  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl,
  };

  module.showOnly = (selector) => {
    console.log('hit me');
    $('.container').hide();
    $(selector).fadeIn();
  };

  const templateCache = {};
  module.render = (templateId, data) =>{
    let template = templateCache[templateId];
    if(!template){
      let template = Handlebars.compile($(`#${templateId}`).text());
    }
    return template(data);
  }
})(app);