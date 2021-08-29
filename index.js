require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const Twit = require("twit")
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(process.env.discordWebook);

app.get('/', function(req, res) {
	res.send('Howdy 👋🏼')
});

// Twitter API config
var T = new Twit({
	consumer_key: process.env.twitterApiKey,
	consumer_secret: process.env.twitterApiSecretKey,
	access_token: process.env.twitterAccessToken,
	access_token_secret: process.env.twitterAccessTokenSecret,
})

// Get Twitter userid from username
T.get("users/lookup", { screen_name: process.env.twitterAccountToMonitor }, function (err, data, response) {
	let userid = data[0].id
	startMonitor(userid)
})

// Watch for tweets from the desired Twitter user
function startMonitor(userid) {
	var stream = T.stream("statuses/filter", { follow: userid })
	stream.on("tweet", function (tweet) {
		if (tweet.user.screen_name == process.env.twitterAccountToMonitor) {
			console.log(`New tweet: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`)
			// Send tweet link to Discord
			hook.send('https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str);
		}
	})
}
