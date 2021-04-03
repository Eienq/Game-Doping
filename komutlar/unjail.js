const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
//erdemçakıroğlu
exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix
  let yetkili = ayarlar.jailyetkili
  let jaillogkanal = ayarlar.jaillog
  let verilecekrols = ayarlar.verilecekrols
  let cezalı = ayarlar.cezalı
//erdemçakıroğlu

 
  let erdembots = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(erdembots) //erdemçakıroğlu
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription(`> **Lütfen Bir Üye Etiketle!**\n\n> Doğru Kullanım: **\`${prefix}unjail-k <@kullanıcı>\`**`));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
member.roles.add(verilecekrols)
member.roles.remove(cezalı)
//erdemçakıroğlu
  //erdemçakıroğlu
    //erdemçakıroğlu
   

const erdembotss = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Çıkarıldı')
.addField(`Jailden Çıkarılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jailden Çıkaran Yetkili`,` <@${message.author.id}>`)
.addField(`Jailden Çıkarılınca Verilen Roller`, `<@&${verilecekrols}>`)
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
client.channels.cache.get(jaillogkanal).send(erdembotss)//Log Kanal İd
  
  let erdemcode = new Discord.MessageEmbed()
.setDescription(`${kullanıcı} Adlı Kişisinin <@&${cezalı}> Rolü Alınarak ,<@&${verilecekrols}> Rolü Geri Verildi! `) 
return message.channel.send(erdemcode);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unj","un"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebep'
}