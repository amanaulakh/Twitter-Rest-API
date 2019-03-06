//Create a Twit instance that can be used to make requests to Twitter's APIs.
var Twit = require('twit');

//hiding config properties
	var config = require('./config');
	var T = new Twit(config); 

// Post a tweet
	var tweet = {
		status: '#coding is easy'	
	}
	T.post('statuses/update', tweet, tweeted) ;

// "data" is the parsed data received from Twitter.
// "response" is the [http.IncomingMessage](http://nodejs.org/api/http.html# http_http_incomingmessage) received from Twitter.
function tweeted(err, data, response) {
	if (err){
		console.log('Something went wrong');
	} else {
      console.log('It worked');
  }
}