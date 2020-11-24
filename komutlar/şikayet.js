const Discord = require('discord.js');
const db = require('quick.db')



exports.run = function(client, message, args) {
  let şikayetlog = db.fetch(`şikayetlog_${message.guild.id}`)

    let type = args.slice(0).join(' ');
  
    if (type.length < 1) return message.channel.send(
      
new Discord.MessageEmbed()
 .setColor("#ff0000")     
.setDescription('**__HATA!__**\n\n:white_small_square: **__Doğru Kullanım__** \n **!istek <form>** \n \n :white_small_square: **__Log kanalını belirlemek için__** \n **!istek-log <#kanal>**'));
  
const embed =new Discord.MessageEmbed()

.setColor("#00ff51")

.setDescription(`<@${message.author.id}>\n\n İsteğiniz / Fikriniz Bildirildi! En Kısa Sürede Geri Dönüş Yapılıcakatır.\n\n Anlayışınız İçin Teşekkürler`)
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(embed)

const embed2 = new Discord.MessageEmbed()

.setColor('CYAN')

.setDescription(`<@${message.author.id}> adlı kullanıcının **__Şikayeti__**:`)

.addField(`**Kulanıcı Bilgileri**`, `**__Kullanıcı ID:__** ${message.author.id}\n**__Kullanıcı Adı:__** ${message.author.username}\n**__Kullanıcı Tagı:__** ${message.author.discriminator}`)

.addField("Kullanıcı Şikayeti", type)
.setThumbnail(message.author.avatarURL)

 client.channels.cache.get(şikayetlog).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["şikayet","report"],
  permLevel: 0 
};

exports.help = {
  name: 'şikayet',
  description: 'Şikayet de bulunursunuz..',
  usage: 'şikayet <şikayet>'
}; 