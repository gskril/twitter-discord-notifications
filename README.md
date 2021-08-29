# Twitter Notifications in Discord
Send tweets to a Discord channel instantly using the Twitter API and Discord Webhooks

## Prerequisites
- [Twitter developer account](https://developer.twitter.com/en/apply-for-access)
- NodeJS
- NPM
- Git

## How To Use (Locally)
1. Clone the project
	```bash
	git clone https://github.com/gskril/twitter-discord-notifications.git
	```

2. Go to the project directory
	```bash
	cd twitter-discord-notifications
	```

3. Install dependencies
	```bash
	npm install
	```

4. Change the name of .env.example to .env and configure everything.
    - Twitter API Consumer Key
    - Twitter API Consumer Secret
    - Twitter API Access Token
    - Twitter API Access Token Secret
    - Twitter account to monitor
    - [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
  
5. Start the monitor
	```bash
	npm start
	```
  
  
## How To Run 24/7
1. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) then press "Manage App"
2. Go to the Settings tab of your new project in Heroku and press "Reveal Config Vars"
3. Add the following keys, then enter the values as you would in step 4 from the above section:
	- twitterApikey
	- twitterAccessToken
	- twitterApiSecretKey
	- twitterAccessTokenSecret
4. To keep the app running 24/7, create a free account on [UptimeRobot](https://uptimerobot.com/signUp) and configure a monitor
	- Once logged in press "Add New Monitor"
	- Select the type "HTTPS"
	- Friendly name can be anything like the name of your website
	- URL is the URL of your website including https://
	- Set the monitoring interval to 25 minutes
	- Press "Create Monitor"