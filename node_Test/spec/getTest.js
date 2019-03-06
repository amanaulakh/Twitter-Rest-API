//Create a Twit instance that can be used to make requests to Twitter's APIs.
	var Twit = require('twit');

//hiding config properties
	var config = require('./config');
	var T = new Twit(config);  

// Set up your search parameters

var params = {
		q: 'flower', 
	count: 2
}
// Search twitter for all tweets containing the word 'flower' and count=2
// Initiate your search using the above paramaters
		T.get('search/tweets', params, gotData);
  
  
//"data" is the parsed data received from Twitter.
//"response" is the [http.IncomingMessage](http://nodejs.org/api/http.html# http_http_incomingmessage) received from Twitter.
	  function gotData(err, data, response){
	  var tweets = data.statuses;
	  
// Display the tweets	  
	  for(var i = 0; i<tweets.length;i++){
		console.log(tweets[i].text);
	  }
	  
// verify the status code
	console.log(response.statusCode);    
  
// verify the status message
	console.log(response.statusMessage);   
}

	