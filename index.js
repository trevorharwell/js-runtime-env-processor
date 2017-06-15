var runtimeEnvTemplate = require('js-runtime-env').runtimeEnvTemplate;


function injectEnvConfiguration(providedString, configuration) {
  var jsonConfiguration;
  try {
    jsonConfiguration = JSON.stringify(configuration);
  } catch (e) {
    // do nothing
  }
  if (jsonConfiguration == null) {
    jsonConfiguration = '{}';
  }
  var newPadding = runtimeEnvTemplate.length - jsonConfiguration.length;
  var finalString = jsonConfiguration + Array(Math.max(newPadding, 0)).join(' ');
  return String(providedString == null ? '' : providedString).replace(runtimeEnvTemplate, finalString);
};

module.exports = injectEnvConfiguration;