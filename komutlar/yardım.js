const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

.setColor('#fff000')
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setDescription(`
> **${prefix}\`ban\`** \n
> **${prefix}sohbet-aç \n
> **${prefix}mute \n
> **${prefix}unmute \n 
> **${prefix}sohbet-kapat \n
> **${prefix}jail \n 
> **${prefix}unjail-e (Erkek İçin) \n
   ${prefix}unjail-k (Kız İçin) `)
.setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
            
        return message.channel.send(yardim);
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