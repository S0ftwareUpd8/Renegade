//const config = require('../config.js');
const client = require('../client.js');
const reload = require('require-reload')(require);
const unload = require('un-require');
const fs = require('fs');

function unloadSubcommands(m, args) {
  fs.readdir('./commands', async (err, files) => {
    if (err) {
      return m.edit(`Oh shit, an error. ${err}`);
    } else {
      try {
        const subcmds = files.filter(f => f.includes(`${args[0]}_`));
        if (subcmds.length > 0) {
          subcmds.forEach((subcmd) => {
            unload(require.resolve('./' + subcmd));
          });
        }
      } catch (e) {
        return m.edit(`Error with unloading command \`${args[0]}\`\n\`\`\`xl\n${err}\`\`\``);
      }
    }
  });
}
function registerSubcommands(cmd, parent) {
  cmd.subcommands = cmd.subcommands || [];
  cmd.subcommands.forEach((subcmd) => {
    if (subcmd.enabled) {
      const c = parent.registerSubcommand(subcmd.label, subcmd.action, subcmd.options);
      registerSubcommands(subcmd, c);
    }
  });
}

module.exports = {
  name: 'reload',
  action: async (msg, args) => {
    msg.channel.sendTyping();
    const m = await client.createMessage(msg.channel.id, '[PENDING] Reloading...');
    if (args.length > 0) {
      if (/\s/.test(args.join(' '))) {
        return msg.channel.createMessage('A command can\'t contain spaces!');
      }
      if (args[0].includes('/')) {
        return msg.channel.createMessage('A command can\'t contain illegal characters (`/`).');
      }
    }
    try {
      client.unregisterCommand(args[0]);
      const c = reload(`./${args[0]}`);
      if (c.enabled && !c.isSubcommand) {
        const cmd = client.registerCommand(c.label, c.action, c.options);
        
        unloadSubcommands(m, args);
        registerSubcommands(c, cmd);
      }
      return m.edit(`[SUCCESS] Reloaded command \`${args[0]}\``);
    } catch (err) {
      return m.edit(`Error while loading command \`${args[0]}\`!\n\`\`\`xl\n${err}\`\`\``);
    }
  },
  options: {
    description: 'Reloads the specified command.',
    fullDescription: 'Reloads the specified command',
    aliases: [],
    usage: '[ cmd ] (--f)',
    requirements: {
      roleIDs: ['522312065126367252']
    }
  }
};