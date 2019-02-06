const client = require('../client.js');

module.exports = {
    name: 'warn',
    action: async (msg, args, guild) => {
      const thisUser = msg.mentions[0] || msg.channel.guild.members.get(args[0]);
      const thisReason = args.splice(1).join(' ') ? thisReason : 'No reason provided';
      const thisGuild = msg.channel.guild.name;
      const thisDM = await client.getDMChannel(thisUser.id);
        client.createMessage(thisDM.id, `You've been warned in ${thisGuild}: ${thisReason}`)
        msg.channel.createMessage(`<:tickYes:504014644269154331> Warned ${thisUser.username}#${thisUser.discriminator}`);
    },
    options: {
        description: 'Give a user a warning.',
        fullDescription: 'Adds a warning type infraction to the user and DMs then the warning reason.',
        aliases: [],
        usage: '[user] [reason]',
        argsRequired: true,
        requirements: {
          permissions: {
            manageMessages: true
          }
        }
    }
};
