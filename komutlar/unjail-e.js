const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 
  let yetkili = ayarlar.jailyetkili
  let jaillogkanal = ayarlar.jaillog
  let erkekrol1 = ayarlar.erkekrol1
  let erkekrol2 = ayarlar.erkekrol2
  let cezalı = ayarlar.cezalı


 
  let acebots = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`).setColor('#ff0000')
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('Bir üye etiketlemen gerekiyor!'));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
member.roles.add(erkekrol1)//Verilecek Erkek Rol
member.roles.add(erkekrol2)//Verilecek 2. Erkek Rol
member.roles.remove(cezalı)//Cezalı Rol

   

const ikrudka = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Çıkarıldı')
.addField(`Jailden Çıkarılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jailden Çıkaran Yetkili`,` <@${message.author.id}>`)
.addField(`Jailden Çıkarılınca Verilen Roller`, `<@&${erkekrol1}>, <@&${erkekrol2}>`)
.setColor("#ffecbc")
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
client.channels.cache.get(jaillogkanal).send(ikrudka)//Log Kanal İd
  
  let acebot = new Discord.MessageEmbed() 
.setDescription(`${kullanıcı} Adlı Kişisinin <@&${cezalı}> Rolü Alınarak ,<@&${erkekrol1}> ve <@&${erkekrol2}> Rolleri Verildi! `) 
.setColor("#ffecbc")
return message.channel.send(acebot);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unjail-e","uerkek"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'ue',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebep'
}