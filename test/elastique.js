global.assert = require("chai").assert;
global.expect = require("chai").expect;


describe('Elastique', function(){
  describe('Push notifications', function(){
    it('should do push noticications', function(){
    	var Elastique = require('../lib/elastique');
    	var elastique = new Elastique('testkey', 'testsecret');
    	expect(elastique).to.respondTo('getAuthorizationHeader');
    	expect(elastique).to.respondTo('push');
    })
  })
})