const moment = require('moment')

module.exports = function({commands, config}) {
  commands_info = require('./commands.json');
  commands_info_thread = { name: "Thread-Only", value: "" };
  commands_info_thread_continued = { name: "Thread-Only (continued)", value: "" };
  commands_info_global = { name: "Anywhere on the Inbox Server", value: "" };
  commands_info_snippets = { name: "Snippets", value: "Click [here](https://github.com/CaptainM777/modmailbot/blob/master/docs/snippets.md) for information about snippets.\n" }

  for(const command in commands_info.thread_only) { commands_info_thread.value += `\`${config.prefix}${command}\` - ${commands_info.thread_only[command]}\n` }
  for(const command in commands_info.thread_only_continued) { commands_info_thread_continued.value += `\`${config.prefix}${command}\` - ${commands_info.thread_only_continued[command]}\n` }
  for(const command in commands_info.global) { commands_info_global.value += `\`${config.prefix}${command}\` - ${commands_info.global[command]}\n` }

  commands.addInboxServerCommand("helpp", "", async (message) => {
    embed = {
      color: 231676,
      author: {
        name: "Temp-Bot Commands",
        icon_url: message.channel.guild.iconURL
      },
      description: "Arguments in <> are required and arguments in [] are optional. If a command description says \"globally\", that means the change applies to all threads.\n\nIf you need any help, feel free to contact <@260600155630338048> (Captain M#0854).",
      fields: [commands_info_thread, commands_info_thread_continued, commands_info_global, commands_info_snippets],
      timestamp: moment().format()
    }
    message.channel.createMessage({ embed: embed })
  });
}