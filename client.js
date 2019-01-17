if (Number(process.version.slice(1).split('.')[0]) < 8)
  throw new RangeError('Node 8.0.0 or higher is required. Update Node on your system.');

const eris = require('eris');
const config = require('./config.json');


const client = new eris.CommandClient(config.token, {
  autoreconnect: true,
  getAllUsers: false,
  restMode: true,
  defaultImageFormat: 'png'
}, {
  defaultHelpCommand: true,
  name: 'Renegade on Eris',
  owner: 'S0ftwareUpd8#9999',
  prefix: ['r.', '@mention ', '!'],
  defaultCommandOptions: {
    permissionMessage: 'You don\'t have permissions to run this command.',
    cooldown: 1000,
    cooldownMessage: 'You\'re using this command too fast!'
  }
});

client.on('unhandledRejection', err => {
  console.log(`Unhandled Rejection Error: ${err.stack}`);
});
client.on('error', err => {
  console.log(`Error: ${err.stack}`);
});

client.on('messageCreate', msg => {
  let blacklist = ['425023068004548618'];
  if (blacklist.includes(msg.author.id)) return;
});

module.exports = client;
