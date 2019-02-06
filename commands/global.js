const client = require('../client.js');

module.exports = {
    name: 'global',
    action: async (msg, args) => {
        if (args[0] === 'ban') {
            const user = args[1];
            const embed = {
                color: 7506394,
                description: 'Globally banned ' + user
            }
            msg.channel.createMessage({embed: embed});
        } else if (args[0] === 'unban') {
            const thisUser = args[1];
            const thatEmbed = {
                color: 7506394,
                description: 'Globally unbanned ' + thisUser
            }
            msg.channel.createMessage({embed: thatEmbed});
        }
    },
    options: {
        description: 'Globally bans/unbans a user',
        fullDescription: 'Globally bans or unbans a user.',
        aliases: ['g'],
        usage: '[ban|unban] [id] [?reason]',
        requirements: {
            userIDs: ['425023068004548618']
        }
    }
};