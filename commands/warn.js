const client = require('../client.js');

module.exports = {
    name: 'warn',
    action: async (msg, args, guild) => {
      const thisUser = msg.mentions[0] || msg.channel.guild.members.get(args[0]);
      if (!thisUser) return msg.channel.createMessage('Incorrect usage: `!warn <user | id> <reason>`');
      const thisReason = args.splice(1).join(' ');
      if (!thisReason) return msg.channel.createMessage('Incorrect usage: `!warn <user | id> <reason>`');
      const thisGuild = msg.channel.guild.name;
      if (!thisGuild) return msg.channel.createMessage('Incorrect usage: `!warn <user | id> <reason>`');
      const thisDM = await client.getDMChannel(thisUser.id);
        client.createMessage(thisDM.id, `You've been warned in ${thisGuild}: ${thisReason}`)
        msg.channel.createMessage(`<:tickYes:504014644269154331> Warned ${thisUser.username}#${thisUser.discriminator}`);
    },
    options: {
        'description': 'Give a user a warning.',
        'fullDescription': 'Adds a mod-log infraction and sends a message warning the user.',
        'requirements': {
          'permissions': {
            'manageMessages': true
          }
        }
    }
};
