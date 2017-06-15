var runtimeEnvTemplate = require('js-runtime-env').runtimeEnvTemplate;


function injectEnvConfiguration(providedString, configuration) {
  var stringConfiguration = JSON.stringify(configuration);
  var newPadding = runtimeEnvTemplate.length - stringConfiguration.length;
  var finalString = stringConfiguration + Array(Math.max(newPadding, 0)).join(' ');
  return String(providedString).replace(runtimeEnvTemplate, finalString);
};

module.exports = injectEnvConfiguration;