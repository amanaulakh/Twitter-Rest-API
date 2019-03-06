let request = require("request");
let base_url = "https://api.twitter.com/1.1/search/tweets.json??q=flower&count=2"

describe("Users List API Exists", function() {
	 it("returns status code 200", function(done) {
		 request.get(base_url, function(error, response, body) {
		 expect(response.statusCode).toBe(200);
		 		 console.log('"Status is there"');
				 console.log(response.statusCode);
				 console.log(response.body);

		 done();
	 });
    });
 });
