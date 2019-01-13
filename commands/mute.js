const client = require('../client.js');

module.exports = {
    name: 'mute',
    action: async (msg, args, client) => {
      const thisUser = msg.channel.guild.members.get(args[0]) || msg.channel.guild.members.get(msg.mentions[0].id);
      const thisReason = args.splice(1).join(' ');
      const thisRole = msg.channel.guild.roles.find(r => r.name === 'Muted');
       if (!thisRole) {
         msg.channel.createMessage('<:tickNo:504014629777833985> I can\'t find a `Muted` role. Please create one and set the proper permissions.');
       } else {
         try {
           await thisUser.addRole(thisRole.id, thisReason);
           msg.channel.createMessage(`<:tickYes:504014644269154331> Muted ${thisUser.user.tag}`);
         } catch (e) {
           if (e.name === 'DiscordAPIError' && e.message === 'Missing Permissions') {
             msg.channel.createMessage('<:tickNo:504014629777833985> I couldn\'t change the roles for that user. Please check my permissions and try again.');
           } else {
             msg.channel.createMessage('<:tickNo:504014629777833985> An error occured. Please check my permissions and try again.');
           }
         }
       }
    },
    options: {
        description: 'Mutes a user',
        fullDescription: 'Mutes a user',
        aliases: [],
        usage: '[user] [reason]',
        requirements: {
          permissions: {
            manageMessages: true
          }
        }
    }
};

// <:tickNo:504014629777833985> <:tickYes:504014644269154331>
