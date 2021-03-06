const client = require('../client.js');

module.exports = {
    name: 'kick',
    action: async (msg, args) => {
      const thisUser = msg.channel.guild.members.get(args[0]) || msg.channel.guild.members.get(msg.mentions[0].id);
      const thisReason = args.splice(1).join(' ') ? thisReason : 'No reason provided.';
      if (!thisUser) return msg.channel.createMessage('I can\'t find that user.');
      if (!thisUser.permission.has('manageMessages')) return msg.channel.createMessage('<:tickNo:504014629777833985> That user is a moderator, I can\'t do that.');
      if (!msg.channel.guild.members.get(client.user.id).permission.has('kickMembers')) return msg.channel.createMessage('<:tickNo:504014629777833985> I don\'t have the kick members permission, please check my roles and try again.');
      try {
        await msg.channel.guild.kickMember(thisUser.user.id, thisReason)
        msg.channel.createMessage(`<:tickYes:504014644269154331> Kicked ${client.getRESTUser(thisUser.user.id).tag}`);
      } catch (e) {
        if (e.name === 'DiscordRESTError' && e.message === 'Missing Permissions' || e.name === 'DiscordAPIError' && e.message === 'Missing Permissions') {
          msg.channel.createMessage('<:tickNo:504014629777833985> I don\'t have permissions to do that, please check my roles and try again.');
        } else {
          msg.channel.createMessage('<:tickNo:504014629777833985> An error occured, please check my roles and try again.');
          console.log(e.stack)
        }
      }
    },
    options: {
        description: 'Kicks a user from the server',
        fullDescription: 'Kicks a user from the current server by ID or mention',
        aliases: [],
        usage: '[user | snowflake] [reason]',
        requirements: {
          permissions: {
            kickMembers: true
        }
      }
    }
};
