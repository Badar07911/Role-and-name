const Discord = require('discord.js');
const client = new Discord.Client

client.on(guildMember,Update',(oldMember,newmember)->
{
var role = newMember.guild.roles.find('name','BG');
if(newMember.nickname != null && newMember.nickname.startswith(bg))
{
newmember.addRole(role).catch(()={});
}

else
{
newmember.removeRole(role).catch(()={});
} 

client.login('NjE0NzgzOTAyNDA5Njg3MDUw.XWEgYg.Dc7MgF9PhVkaDtKCZkW1ZyZkn_g') 
