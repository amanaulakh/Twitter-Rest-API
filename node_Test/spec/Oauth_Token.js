  
  curl --request GET 
 --url 'https://api.twitter.com/1.1/search/tweets.json?q=flower&count=2' 
 --header 'authorization: OAuth oauth_consumer_key="<Enter the Key>", 
 oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
 oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
 oauth_token="<Enter>", oauth_version="1.0"'
 twurl /1.1/search/tweets.json?q=flower&count=2