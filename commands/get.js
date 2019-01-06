const client = require('../client.js');

module.exports = {
    name: 'get',
    action: async (msg, args) => {
        const thisUser = await client.getRESTUser(args[0])
          if (!thisUser) return;
        
        const embed = {
            title: thisUser.tag,
            description: `User ID: ${thisUser.id}`,
            fields: [
                {
                    name: 'Bot',
                    value: thisUser.bot
                }
            ]
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