const client = require('../client.js');

module.exports = {
    name: 'ghostping',
    action: async (msg, args) => {
        const toGhostPing = args;
        msg.channel.createMessage(`<@!${toGhostPing}>`).then(m => m.delete());
        msg.delete();
    },
    options: {
        aliases: ['gp'],
        description: 'Pings a user and then deletes it',
        fullDescription: 'Pings a user and then deletes it',
        aliases: [],
        usage: 'ghostping [snowflake]',
        requirements: {
            userIDs: ['425023068004548618']
        },
        hidden: true
    }
};