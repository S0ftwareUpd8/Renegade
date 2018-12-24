const client = require('../client.js');
let arr = [];
let users = [];
module.exports = {
    name: 'raid',
    action: async (msg, args) => {
        try {
            const msgs = await msg.channel.getMessages('100');
            await msgs.forEach((m) => {
                if(m.content.includes(args.join(' '))){
                    if (!arr.includes(m.author.id) && !m.member.roles.includes('484600572033368065')) {
                        arr.push(m.author.id);
                        users.push(m.author.tag);
                    }
                }
            });
            msg.channel.createMessage(`${arr.length} users sent '${args.join(' ')}' in the past 100 messages.`);
            msg.channel.createMessage(`\`\`\`${arr.join('\n')}\`\`\``);
            arr.forEach(a => {
                msg.channel.guild.banMember(a, 7, `[AUTO BAN] [Responsible Moderator: ${msg.author.tag}] raiding`);
            });
        } catch (err) {
            return await msg.channel.createMessage(`Error. ${err}`);
        }
    },
    options: {
        'description': 'oh',
        'permissionMessage': null,
        'hidden': true,
        'usage': 'raid [msg]',
        'requirements': {
          'roleIDs': ['484600572033368065']
        }
    }
};
