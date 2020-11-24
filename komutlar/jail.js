const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 
    let yetkili = ayarlar.jailyetkili
    let jaillogkanal = ayarlar.jaillog
    let cezalı = ayarlar.cezalı




   let acebots = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`).setColor('#ff0000')
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setDescription('Bir üye etiketlemen gerekiyor!'));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
let reason = args.slice(1).join(" ")
if(!reason) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setDescription("Jaile atmak için sebep belirtmelisin!"));
  
member.roles.cache.forEach(r => {
member.roles.add(cezalı);
member.roles.remove(r.id)

   
})
const logkanal = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Atıldı')
.addField(`Jaile Atılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jaile Atan Yetkili`,` <@${message.author.id}>`)
.addField(`Jaile Atılma Sebebi`, `${reason} `)
.setColor("#ffecbc")
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
client.channels.cache.get(jaillogkanal).send(logkanal)// Log Kanalı
  
  let acecode = new Discord.MessageEmbed() 
.setDescription(`${kullanıcı} Adlı Kişisinin Tüm Rolleri Alınarak, <@&${cezalı}> Rolü Verildi! `) 
.setColor("BLACK")
return message.channel.send(acecode);
  
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
  usage: '.jail @etiket Sebep'
}

