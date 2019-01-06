const client = require('../client.js');

module.exports = {
    name: 'kick',
    action: async (client, msg, args) => {
      let thisUser = msg.mentions[0] || msg.channel.guild.members.get(args[0]);
      let thisReason = args.splice(1).join(' ');
      if (!thisReason || thisReason.length < 1) thisReason = 'No reason provided.';
      try {
        await msg.channel.guild.kickMember(thisUser.id, thisReason);
        msg.channel.createMessage(`<:tickYes:504014644269154331> Kicked ${thisUser.username}#${thisUser.discriminator}`);
      } catch (e) {
        console.log(e);
      }
    },
    options: {
        description: 'Kicks a user from the guild.',
        fullDescription: 'Removes a member from the server by ID or by mention.',
        aliases: [],
        usage: 'kick [user | snowflake] [reason]',
        requirements: {
          permissions: {
            kickMembers: true
          }
        }
    }
};
