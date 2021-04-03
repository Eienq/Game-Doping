const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
// Erdem Çakıroğlu
    let yetkili = ayarlar.jailyetkili
    let jaillogkanal = ayarlar.jaillog
    let cezalı = ayarlar.cezalı

// Erdem Çakıroğlu
   let erdembots = new Discord.MessageEmbed().setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(erdembots) // Erdem Çakıroğlu
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir üye etiketlemen gerekiyor!'));// Erdem Çakıroğlu
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
let reason = args.slice(1).join(" ")// Erdem Çakıroğlu
if(!reason) return message.channel.send(new Discord.MessageEmbed().setDescription("Jaile atmak için sebep belirtmelisin!"));
  
member.roles.cache.forEach(r => {
member.roles.add(cezalı);
member.roles.remove(r.id)})// Erdem Çakıroğlu
  
const ace = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Atıldı')
.addField(`Jaile Atılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jaile Atan Yetkili`,` <@${message.author.id}>`)
.addField(`Jaile Atılma Sebebi`, `${reason} `)
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setColor('BLUE')
client.channels.cache.get(jaillogkanal).send(ace)// Erdem Çakıroğlu
  
  let erdemcode = new Discord.MessageEmbed()
  .setDescription(`${kullanıcı} Adlı Kişisinin Tüm Rolleri Alınarak, <@&${cezalı}> Rolü Verildi! `) 
return message.channel.send(erdemcode)
// Erdem Çakıroğlu
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza"],
  permLevel: 0
}
// Erdem Çakıroğlu
exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebep'// Erdem Çakıroğlu
}

