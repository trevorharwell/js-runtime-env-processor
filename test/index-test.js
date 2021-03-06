var should = require('should');
var injectEnvConfiguration = require('../index');
var runtimeEnvTemplate = require('js-runtime-env').runtimeEnvTemplate;

describe('index', function() {
  it('should not error with no object', function() {
    var testString = '';
    should.doesNotThrow(function() {
      injectEnvConfiguration(testString);
    });
  });
  it('replaces runtime template with values in string', function() {
    var testString = 'var test = \'' + runtimeEnvTemplate + '\';'
    var expected = 'var test = \'{"hello":"world"}' + Array(runtimeEnvTemplate.length-17).join(' ') + '\';';
    injectEnvConfiguration(testString, { hello: 'world' }).should.equal(expected);
  });
  it('replaces runtime template with values in double quote string', function() {
    var testString = 'var test = "' + runtimeEnvTemplate + '";'
    var expected = 'var test = "{\\"hello\\":\\"world\\"}' + Array(runtimeEnvTemplate.length-17).join(' ') + '";';
    injectEnvConfiguration(testString, { hello: 'world' }).should.equal(expected);
  });
  it('should be able to be evaluated', function() {
    var testString = 'JSON.parse(\'' + runtimeEnvTemplate + '\')';
    var resolvedString = injectEnvConfiguration(testString, { hello: 'world' });
    var result = eval(resolvedString);
    result.should.have.property('hello', 'world');
  });
  it('should be able to be evaluated as a double quote', function() {
    var testString = 'JSON.parse("' + runtimeEnvTemplate + '")';
    var resolvedString = injectEnvConfiguration(testString, { hello: 'world' });
    var result = eval(resolvedString);
    result.should.have.property('hello', 'world');
  });
});
