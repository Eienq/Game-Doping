const Discord = require('discord.js');
const db = require("quick.db")
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
      if(!reason) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("Jaile atmak için sebep belirtmelisin!")).then(m => m.delete(5000));
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) //DCS EKİPİ

   
})
  member.roles.add('774353402858700832')
const embed1 = new Discord.MessageEmbed()
    .setAuthor('Bir Üye Cezalıya Atıldı')
    .addField(`Jaile Atılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jaile Atan Yetkili`,` <@${message.author.id}>`)
  .addField(`Jaile Atılma Sebebi`, `${reason} `)
                          .setThumbnail(message.author.avatarURL())

    .setColor("GREEN")
 .setFooter(`${message.author.tag} tarafından komut kullanılmıştır..`, message.author.avatarURL())
    .setTimestamp()
    
client.channels.cache.get('774349665700675615').send(embed)
  // DCS EKİPİ
  
  let embed = new Discord.MessageEmbed() 
  .setDescription(`${kullanıcı} Adlı Kişisinin Tüm Rolleri Alınarak, <@&774353402858700832> Rolü Verildi! `) 
                      .setThumbnail(message.author.avatarURL())

 .setFooter(`${message.author.tag} tarafından komut kullanılmıştır..`, message.author.avatarURL())
  .setTimestamp()
      .setColor("BLACK")

  return message.channel.send(embed).then(m => m.delete(5000000));
  
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