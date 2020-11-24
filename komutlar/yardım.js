const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

  let acebot = new Discord.MessageEmbed().setColor('#00ff51').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();


const ace = acebot
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setAuthor(`V1-Geliştirilmiş-Public-Moderasyon-Botu-v12`)
.setDescription(`
> **\`${prefix}ban -> .ban @üye <sebep>\`** \n
> **\`${prefix}git -> .git @üye\`** \n
> **\`${prefix}çek -> .çek @üye\`** \n
> **\`${prefix}sohbet-aç -> .sohbet-aç\`** \n
> **\`${prefix}sohbet-kapat -> .sohbet-kapat\`** \n
> **\`${prefix}mute -> .mute @üye <Süre> <Sebep>\`** \n
> **\`${prefix}unmute -> .unmute @üye\`** \n 
> **\`${prefix}jail -> .jail @üye <Sebep>\`** \n
> **\`${prefix}unjail-e (Erkek İçin) -> .ue @üye\`** \n
> **\`${prefix}unjail-k (Kız İçin) -> .uk @üye\`** `)
return message.channel.send(ace);
}
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