const client = require('../client.js');

module.exports = {
    name: 'content',
    action: async (msg, args) => {
          msg.channel.createMessage(`\`\`\`${await msg.channel.getMessage(args[0]).then(m => m.content)}\`\`\``);
    },
    options: {
        description: 'Gets a messages content',
        fullDescription: 'Gets a message content by ID',
        aliases: [],
        usage: 'content [snowflake]',
        requirements: {
            permissions: {
                manageMessages: true
            }
        }
    }
};