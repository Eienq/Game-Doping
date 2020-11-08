const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın'))

    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Bir rol etiketlemelisin (Eğer rolü bulamıyorsan kanalı görebildiğinden veya etkiketlenebilir olduğundan emin ol)'))
   db.set(`banrol_${message.guild.id}`, rol.id)
   return message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription('<a:basarili:757851040346538084> Ban yetkili rolü <@&' + rol+ '> Olarak ayarlandı'))
} 

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban-yetkili-rol"
}