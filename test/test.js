'use strict';
var chai = require('chai');
chai.use(require('chai-http'));
chai.use(require('chai-things'));
var expect = chai.expect;
var should = chai.should();
var fs = require("fs");
var input = "url-list";

var urlList = [];
fs.readFileSync(input).toString().split('\r\n').forEach(function(line) {
	urlList.push(line)
});


urlList.forEach(function(url) {
	it('test if XML available', function(done) {
		chai.request(url)
			.get('/')
			.end(function(err, res) {
				console.log(url);
				expect(res).to.have.status(200);


				done();
			});
	});
})

/* -------------------- */

describe('Test XML export', function() {
	it('test if URL is live', function(done) {
		chai.request(url)
			.get('/')
			.end(function(err, res) {
				console.log(url);
				expect(res).to.have.status(200);
				done();
			});
	});

	it('test if returned file is a valid XML file');

	it('test if XML is valid against the schema');
	
});

// console.log(urlList);
