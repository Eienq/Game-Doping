const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 
      let yetkili = ayarlar.muteyetkili
      let susturulmuş = ayarlar.susturulmuş
      let mutelogkanal = ayarlar.mutelog



   let acebots = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`).setColor('#ff0000')
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('Bir üye etiketlemen gerekiyor!'));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
member.roles.remove(susturulmuş)//ALINACAK ROL

   

const embed1 = new Discord.MessageEmbed()
.setAuthor('Bir Üyenin Susturması Açıldı')
.addField(`Susturulması Açan Kullanıcı`,` ${kullanıcı}`)
.addField(`Susturmasını Açan Yetkili`,` <@${message.author.id}>`)
.setColor("#ffecbc")
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
client.channels.cache.get('LOG KANAL İD').send(embed1)//KANAL İD
  
  let embed = new Discord.MessageEmbed() 
.setDescription(`${kullanıcı} Adlı Kişisinin <@&MUTE ROL İD> Rolü Alınarak, susturulması kaldırıldı `) 
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