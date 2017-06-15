var should = require('should');
var injectEnvConfiguration = require('../index');
var runtimeEnvTemplate = require('js-runtime-env').runtimeEnvTemplate;

describe('index', function() {
  it('replaces runtime template with values in string', function() {
    var testString = 'var test = \'' + runtimeEnvTemplate + '\';'
    var expected = 'var test = \'{"hello":"world"}' + Array(runtimeEnvTemplate.length-17).join(' ') + '\';';
    injectEnvConfiguration(testString, { hello: 'world' }).should.equal(expected);
  });
  it('should be able to be evaluated', function() {
    var testString = 'JSON.parse(\'' + runtimeEnvTemplate + '\')';
    var resolvedString = injectEnvConfiguration(testString, { hello: 'world' });
    var result = eval(resolvedString);
    result.should.have.property('hello', 'world');
  });
});
