var Discord require("discord.js);

var client new Discord.client();

client.login(NTY3NTY3MTU30DMxOTI1Nzgw.XLdaLg.za EC1xX1Zb61cLmLcre2MYgs' );

client.on(ready',econsole.log ${client.user.tag) is ready))

client.on('guildMemberUpdate',(oldMember, neutember)->

{

var role = new Member-guild.roles.find('name', 'main);

if (newMember.nickname !null && newMember.nickname.startswith(! UG '))

{

new member.add role(role).catch((-> {});

}

else

new Member.remove Role(role).catch(() ->{});
