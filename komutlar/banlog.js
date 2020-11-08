const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın'))

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Ban log kanalını belirtmelisin'))

    db.set(`banlog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`<a:basarili:757851040346538084> Ban log kanalı <#${kanal.id}> Olarak ayarlandı!`))
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban-log"
}