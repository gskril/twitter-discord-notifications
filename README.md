# Twitter Notifications in Discord
Send tweets to a Discord channel instantly using the Twitter API and Discord Webhooks

## Prerequisites
Everything is free!
- [Twitter developer account](https://developer.twitter.com/en/apply-for-access)
- For local use:
	- NodeJS
	- NPM
	- Git
- For cloud use:
	- [Heroku account](https://signup.heroku.com/)
	- [UptimeRobot account](https://uptimerobot.com/signUp)

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
  
  
## How to Run It 24/7 in the Cloud
1. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2. Configure your Twitter API, Discord Webook, and enter the Twitter handle you want to monitor under "Config Vars". Then press "Deploy app"
	- To edit the settings later, go to the Settings tab in Heroku and press "Reveal Config Vars"
3. To keep the app running 24/7, create a free account on [UptimeRobot](https://uptimerobot.com/signUp) and configure a monitor
	- Once logged in press "Add New Monitor"
	- Select the type "HTTPS"
	- Friendly name can be anything like the name of your website
	- URL is the URL of your website including https://
	- Set the monitoring interval to 25 minutes
	- Press "Create Monitor"