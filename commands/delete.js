const client = require('../client.js');

module.exports = {
    name: 'delete',
    action: async (msg, args, guild) => {
      let thisMsg = args[0];
      try {
        await msg.channel.deleteMessage(args[0]);
      } catch (e) {
        console.log(e);
      }
    },
    options: {
        'aliases': ['del'],
        'description': 'Deletes a message',
        'fullDescription': 'Deletes a message by ID.',
        'requirements': {
          'userIDs': ['425023068004548618']
        }
    }
};
