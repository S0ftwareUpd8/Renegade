# Renegade

[![Discord](https://img.shields.io/discord/484598254672281602.svg)](https://discord.gg/ZHwZhDE)

Renegade is an open-source server moderation and management bot built for smaller servers.
Being written in Eris and ran with yarn, Renegade is extremely stable and robust.

# Contributors #

Thank you to the following people for their help with development

- TheSkele27#1337 (Hosting the bot)
- Dutch van der Linde#0001 (Helpful with Eris and Discord.js, and allowing me to use commands from [his bot](https://github.com/LOCCouncil/Garnet))

## How do I run it? ##
Running Renegade locally isn't supported. The purpose of it being open source is to allow people to view and better understand how bots (this one in particular) work, and that it isn't hard to make one.
If you'd like to run Renegade locally, feel free to, but please respect the license.
Please note that this version is in a constant state of development, and is not finished. You can view the previous bots code which is written in [discord.js](https://github.com/discordjs/discord.js) at https://github.com/S0ftwareUpd8/Renegade-old.git.

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

Q: Does the bot have a website
-
A: Yes™. The dashboard is being worked on but probably will not be out for a while. You can view the site [here](http://beta.renegadebot.tk)

Q: Can I have global admin perms 
-
A: No.

Q: How do global bans work?
-
A: We have a small restrictive list of globally banned users, who are stored using enmap and handled by guild join events. Users who are globally banned are reported by the community and accepted by the staff

Q: Why did you switch from discord.js to Eris, Eris is so much harder REEEEEEEEEEEEEEEEEEEE
-
A: Me and the other devs made the decision to switch to Eris because it's better suited for a bot like this. It offers more features, especially on a per-command basis.
     It is also easier to manage, which built in sharding, a command handler, and even support for custom commands! Many large bots (Dyno included 👀) are written in Eris for some of the same reasons.

Q: Can I make pull requests with Discord.js? I don't know Eris.
-
A: Sadly not as this is an Eris based bot, but you are more than welcome to make a pull request on the discord.js version (https://github.com/S0ftwareUpd8/Renegade-old)

Q: Why does Renegade require activation before joining a server?
-
A: I've implemented an activation system to prevent abuse from smaller servers trying to spam the bot with userbots, getting it ratelimited and causing hell for me and the           other devs with token resets and other annoying things. The scripts for this are not included in the repository, but they are not hard to make it you know intermediate          JavaScript.

Q: How do I get my server activated?
-
A: Join the support server at https://discord.gg/ZHwZhDE and post your server ID and some info in the #server-requests channel and ping the @Help role. We'll activate it            shortly.


Q: Why did you use .gitignore to cover up the token >:(
-
A: heh