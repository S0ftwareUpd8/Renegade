# Renegade

[![Discord](https://img.shields.io/discord/484598254672281602.svg)](https://discord.gg/ZHwZhDE)

Renegade is an open-source server moderation and management bot built for smaller servers.
Being written in Eris and ran with yarn, Renegade is extremely stable and robust.

# Contributors #

Thank you to the following people for their help with development

- TheSkele27#1337 (Hosting the bot)
- Dutch van der Linde#0001 (~~being my personal support~~)

## How do I run it? ##
Running Renegade locally isn't supported. The purpose of it being open source is to allow people to view and better understand how bots work.
If you'd like to run Renegade locally, feel free to, but please respect the license.
Please note that this version is in a constant state of development, and is not finished. 

## Can I contribute? ##
Yes, simply make a pull request on the repository. Please try to follow my style, use ESLint if needed
This is my ESLint configuration file if you'd like to copy it:
```json
{
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            3
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "prefer-const": [
            "warn",
            "always"
        ],
        "no-console": 0
    }
}
```

## Support ##

You can join our Discord at https://discord.gg/ZHwZhDE
If you don't want to host Renegade yourself, the public version is always available at [https://renegadebot.tk/invite](https://discordapp.com/oauth2/authorize?client_id=491057900140101652&scope=bot&permissions=2146958847). Please note that support will not be given for setting up the bot locally or hosting it.

## FAQ ##

Does the bot have a website
-
Yes™. The dashboard is being worked on but probably will not be out for a while. You can view the site [here](http://beta.renegadebot.tk)

Can I have global admin perms 
-
No.

Why do you use eris. djs is better reeeee
-
Me and the other devs made the decision to switch to Eris because it's better suited for a bot like this. It offers more features, especially on a per-command basis.
     It is also easier to manage, with built in sharding, a command handler, and even support for per server custom commands.


How do I get my server activated?
-
Join the support server at https://discord.gg/ZHwZhDE and post your server ID and some info in the #server-requests channel and ping the @Help role. We'll activate it            shortly.


Why did you use .gitignore to cover up the token >:(
-
ha
