const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
  let hata = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&770868327748599808> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 
if (!message.member.roles.cache.get("770868327748599808")) return message.channel.send(hata) 
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('Bir üye etiketlemen gerekiyor!'));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
member.roles.remove('775801882752188426')

   

const embed1 = new Discord.MessageEmbed()
.setAuthor('Bir Üyenin Susturması Açıldı')
.addField(`Susturulması Açan Kullanıcı`,` ${kullanıcı}`)
.addField(`Susturmasını Açan Yetkili`,` <@${message.author.id}>`)
.setColor("#ffecbc")
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
client.channels.cache.get('775358713723748372').send(embed1)
  
  let embed = new Discord.MessageEmbed() 
.setDescription(`${kullanıcı} Adlı Kişisinin <@&775801882752188426> Rolü Alınarak, susturulması kaldırıldı `) 
.setColor("#92dffe")
return message.channel.send(embed);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute","um"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'u..m',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebe'
}