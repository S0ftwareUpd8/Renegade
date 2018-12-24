//const config = require("../config.js");
const chalk = require('chalk');
module.exports = (client) => {
  console.log(chalk.green('[SYSTEM]: Logged in as ' + client.user.username));
  client.editStatus({name: 'Renegade on Eris'})
};
