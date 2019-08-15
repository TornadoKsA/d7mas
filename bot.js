// Start the bot
const Discord = require("discord.js");
const Client = new Discord.Client();

// Bot Token
Client.login('BotToken');

// BOT LOG

Client.on('ready',  () => {
  console.log('=================');
  console.log('AUTHOR : SAFA7,PATRIC');
  console.log('=================');
  console.log('logged in as * [ " ${client.user.username} " ] SERVERS! [ " ${client.guilds.size');
  console.log('=================');
  console.log('Bot is on!');
  console.log('=================');
Client.user.setStatus("dnd");
});

// Playing
Client.on('ready', () => {
Client.user.setGame(`Dragon ✨ | !help`,'https://www.twitch.tv/tariksv');
});

Client.on('message', message => {
  if (message.content === "help") {
message.author.send(""+ `  **



**`);
    }
});
// BY PATRIC,SAFA7


client.login(process.env.BOT_TOKEN);

