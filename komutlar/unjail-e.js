const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
  let hata = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&Yetkili Rol İD> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 
if (!message.member.roles.cache.get("Yetkili Rol İD")) //Yetkili Rol İd
  return message.channel.send(hata) 
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('Bir üye etiketlemen gerekiyor!'));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
member.roles.add('Verilcek Erkek Rol İd')//Verilecek Erkek Rol
member.roles.add('Verilcek Erkek Rol İd')//Verilecek 2. Erkek Rol
member.roles.remove('Alınacak ROl İd')//Cezalı Rol

   

const embed1 = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Çıkarıldı')
.addField(`Jailden Çıkarılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jailden Çıkaran Yetkili`,` <@${message.author.id}>`)
.addField(`Jailden Çıkarılınca Verilen Roller`, `<@&ERKEK-ROL-İD>, <@&ÜYE-ROL-İD>`)
.setColor("#ffecbc")
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
client.channels.cache.get('LOG-KANAL-İD').send(embed1)//Log Kanal İd
  
  let embed = new Discord.MessageEmbed() 
.setDescription(`${kullanıcı} Adlı Kişisinin <@&CEZALI-ROL-İD> Rolü Alınarak ,<@&ERKEK-ROL-İD> ve <@&ÜYE-ROL-İD> Rolleri Verildi! `) 
.setColor("#ffecbc")
return message.channel.send(embed);
  
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