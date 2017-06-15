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
  var inputString = String(providedString == null ? '' : providedString);
  var newPadding = runtimeEnvTemplate.length - jsonConfiguration.length;
  var finalString = jsonConfiguration + Array(Math.max(newPadding, 0)).join(' ');
  var templateStartIndex = inputString.indexOf(runtimeEnvTemplate);

  if (templateStartIndex >= 0 && inputString[templateStartIndex - 1] === '"') {
    finalString = finalString.replace(/"/g, '\\"');
  }

  return inputString.replace(runtimeEnvTemplate, finalString);
};

module.exports = injectEnvConfiguration;