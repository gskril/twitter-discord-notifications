# Twitter Notifications in Discord
Send tweets to a Discord channel instantly using the Twitter API and Discord Webhooks

## Prerequisites
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
1. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2. Go to the Settings tab of your new project in Heroku and press "Reveal Config Vars"
3. Configure things as you would in step 4 of the above section "How To Use (Locally)"
4. To keep the app running 24/7, go to the Resources tab and press "Change Dyno Type"
5. Upgrade to the "Hobby" plan