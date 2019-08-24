client.on',(guildMember,Update',(old Member,newmember)->

var role =new Member.guild.roles.find('name','BG');
if(newMember.nickname != null && newMember.nickname.startswith (bg))
{
newmember.addRole(role).catch(()={});
}

else

{
newmember.removeRole(role).catch(()={});
}
