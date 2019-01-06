const client = require('../client.js');

module.exports = {
    name: 'ban',
    action: async (client, msg, args) => {
      let thisUser = msg.mentions[0] || msg.channel.guild.members.get(args[0]);
      let thisReason = args.splice(1).join(' ');
        try {
          await msg.channel.guild.banMember(thisUser.id, 2, thisReason);
          msg.channel.createMessage(`<:tickYes:504014644269154331> Banned ${thisUser.username}#${thisUser.discriminator}`);
        } catch (e) {
          console.log(e);
        }
    },
    options: {
        description: 'Bans a user from the server',
        fullDescription: 'Bans a user from the current server by ID or mention',
        aliases: [],
        usage: 'ban [user | snowflake] [reason]',
        requirements: {
          permissions: {
            banMembers: true
        }
      }
    }
};