var fs = require('fs');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    this.Given(/I am on the homepage/, function(next) {
        browser.get('http://localhost:3000');
        next();
    });

    this.Then(/^The title of header should equal "([^"]*)"$/, function(title, next){
        element(by.css('h2')).getText().then(function(title){
            expect(title).to.equal("Angular end-to-end");
        })
        next();
    });

};
