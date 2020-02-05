const antispam = require('discord-anti-spam');

module.exports = (client) => {
  
  new antispam(client, {
  logChannel: client.config.banLogChannel,
  warnBuffer: client.config.warnBuffer, 
  maxBuffer: client.config.warnBuffer,
  interval: client.config.interval, 
  warningMessage: client.config.warningMessage, 
  banMessage: client.config.banMessage, 
  maxDuplicatesWarning: client.config.maxDuplicatesWarning,
  maxDuplicatesWarning: client.config.maxDuplicatesWarning,
  maxDuplicatesBan: client.config.maxDuplicatesBan, 
  deleteMessagesAfterBanForPastDays: parseInt(client.config.deleteMessagesAfterBanForPastDays), 
  exemptRoles: client.config.exemptRoles, 
  exemptUsers: client.config.exemptUsers 
});
  
}
