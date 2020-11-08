const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setDescription( `<a:sagok:757855573554233396> ${prefix}ban \n <a:sagok:757855573554233396> ${prefix}sohbet-aç \n <a:sagok:757855573554233396> ${prefix}sohbet-kapat \n <a:sagok:757855573554233396> ${prefix}mute \n <a:sagok:757855573554233396> ${prefix}unmute  \n <a:sagok:757855573554233396> ${prefix}jail \n <a:sagok:757855573554233396> ${prefix}unjail-e (Erkek İçin) \n <a:sagok:757855573554233396> ${prefix}unjail-k (Kız İçin) `)
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