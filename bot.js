const Discord = require('discord.js');
const client = new Discord.Client 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


var prefix = "@! 『 𝐭𝖌 | 𝙱𝕒𝘥𝕒ᖇ 』#٩٥٢٦"
if(message.content.startsWith(prefix))
         client.channels.find('id', '582093431770185745').send(` **فيه واحد يبيك**  `) 

client.login('NjE0NzgzOTAyNDA5Njg3MDUw.XWEgYg.Dc7MgF9PhVkaDtKCZkW1ZyZkn_g')
