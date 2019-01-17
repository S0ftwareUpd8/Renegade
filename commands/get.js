const client = require('../client.js');

module.exports = {
    name: 'get',
    action: async (msg, args) => {
        const moment = require('moment');
        const thisUser = await client.getRESTUser(args[0])
          if (!thisUser) return;
        const millisJoined1 = new Date().getTime() - thisUser.createdAt;
        const dj1 = millisJoined1 / 1000 / 60 / 60 / 24;

        const embed = {
              title: thisUser.tag,
              description: `User ID: ${thisUser.id}`,
              fields: [
              {
                name: 'Account Created:',
                value: `${moment(thisUser.createdAt).format('LLL')} \n (${dj1.toFixed(0)} Days Ago)`
              }
            ],
            thumbnail: {
              url: thisUser.avatarURL
            },
            color: 8716543
        }
        msg.channel.createMessage({embed: embed});
    },
    options: {
        description: 'Gets information about a user not on the server',
        fullDescription: 'Gets information about a user not on the server',
        aliases: [],
        usage: '[snowflake]',
        requirements: {
            userIDs: ['425023068004548618']
        }
    }
};
