const client = require('../client.js');

module.exports = {
    name: 'prefix',
    action: async (msg, args, guild) => {
      const thisPrefix = args.join(' ');
      client.registerGuildPrefix(msg.channel.guild.id, [thisPrefix, '@mention ']);
      msg.channel.createMessage(`Edited prefix to ${thisPrefix}`);
    },
    options: {
        description: 'Changes the servers prefix',
        fullDescription: 'Edits the bot prefix on the current guild.',
        aliases: [],
        usage: '[ new prefix ]',
        requirements: {
          permissions: {
            manageGuild: true
          }
        }
    }
};
