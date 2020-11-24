const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  // Ace Bots
    let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
    let yetkili = ayarlar.jailyetkili
    let jaillogkanal = ayarlar.jaillog
    let cezalı = ayarlar.cezalı

// Ace Bots


   let acebots = acebot.setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(acebot.setDescription('Bir üye etiketlemen gerekiyor!'));// Ace Bots
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
let reason = args.slice(1).join(" ")// Ace Bots
if(!reason) return message.channel.send(acebot.setDescription("Jaile atmak için sebep belirtmelisin!"));
  
member.roles.cache.forEach(r => {
member.roles.add(cezalı);
member.roles.remove(r.id)})// Ace Bots
  
const ace = acebot
.setAuthor('Bir Üye Cezalıya Atıldı')
.addField(`Jaile Atılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jaile Atan Yetkili`,` <@${message.author.id}>`)
.addField(`Jaile Atılma Sebebi`, `${reason} `)
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
client.channels.cache.get(jaillogkanal).send(ace)// Ace Bots
  
  let acecode = acebot.setDescription(`${kullanıcı} Adlı Kişisinin Tüm Rolleri Alınarak, <@&${cezalı}> Rolü Verildi! `) 
return message.channel.send(acecode);
  // Ace Bots
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza"],
  permLevel: 0
}
// Ace Bots
exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebep'// Ace Bots
}

