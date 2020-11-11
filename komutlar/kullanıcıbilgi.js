const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');


exports.run = async (client, message, args) => {
if(!message.guild.members.cache.get(client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send("Komudu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmalısınız")

message.guild.members.ban(args[0]).then(async (member) => {
let user;
if(member instanceof Discord.GuildMember) { user = member.user; }
else if(member instanceof Discord.User) { user = member; }
else { user = await client.users.fetch(member) };
message.guild.members.unban(args[0]);

message.channel.send(new Discord.MessageEmbed().setTitle(user.tag).setColor('BLUE').setThumbnail(user.avatarURL({dynamic: true}))
.addField(`Bilgileri:`, `**• Hesap Açılma Tarihi:** ${moment(user.createdAt).format('DD/MM/YYYY')}
**• Nicki:** ${user.username}
**• Etiketi:** ${user.discriminator}`));
});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'infoo'
};// codare ♥