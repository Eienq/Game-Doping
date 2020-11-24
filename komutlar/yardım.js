const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

  let acebot = new Discord.MessageEmbed().setColor('#00ff51').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();


const ace = acebot
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setAuthor(`V1-Geliştirilmiş-Public-Moderasyon-Botu-v12`)
.setDescription(`
> **\`${prefix}ban\`** \n
> **\`${prefix}sohbet-aç\`** \n
> **\`${prefix}mute\`** \n
> **\`${prefix}unmute\`** \n 
> **\`${prefix}sohbet-kapat\`** \n
> **\`${prefix}jail\`** \n
> **\`${prefix}unjail-e (Erkek İçin)\`** \n
> **\`${prefix}unjail-k (Kız İçin)\`** `)
return message.channel.send(ace);
}
//evet
exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}

exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}