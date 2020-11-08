const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
  let hata = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&774353377974157353> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 
if (!message.member.roles.cache.get("774353377974157353")) return message.channel.send(hata) 
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('Bir üye etiketlemen gerekiyor!'));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
let reason = args.slice(1).join(" ")
if(!reason) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("Jaile atmak için sebep belirtmelisin!"));
  
member.roles.cache.forEach(r => {
member.roles.add('774353402858700832');
member.roles.remove(r.id)

   
})
const embed1 = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Atıldı')
.addField(`Jaile Atılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jaile Atan Yetkili`,` <@${message.author.id}>`)
.addField(`Jaile Atılma Sebebi`, `${reason} `)
.setColor("BLACK")
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
client.channels.cache.get('774349665700675615').send(embed1)
  
  let embed = new Discord.MessageEmbed() 
.setDescription(`${kullanıcı} Adlı Kişisinin Tüm Rolleri Alınarak, <@&774353402858700832> Rolü Verildi! `) 
.setColor("BLACK")
return message.channel.send(embed);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebe'
}