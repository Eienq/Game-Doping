const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {



const erdems = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setAuthor(`Eien ✮ 卂尺乇丂`)
.setDescription(`
> **\`${prefix}afk -> .afk <sebep>\`** \n
> **\`${prefix}ban -> .ban @üye <sebep>\`** \n
> **\`${prefix}git -> .git @üye\`** \n
> **\`${prefix}çek -> .çek @üye\`** \n
> **\`${prefix}say -> .say\`** \n
> **\`${prefix}şikayet -> .şikayet <Şikayetiniz>\`** \n
> **\`${prefix}sohbet-aç -> .sohbet-aç\`** \n
> **\`${prefix}sohbet-kapat -> .sohbet-kapat\`** \n
> **\`${prefix}smute -> .smute @üye <Süre> <Sebep>\`** \n
> **\`${prefix}unmute -> .unmute @üye\`** \n 
> **\`${prefix}jail -> .jail @üye <Sebep>\`** \n
> **\`${prefix}unjail (Jaildeki Birini Jailden Çıkartmak İçin) -> .u vea .unjail @üye\`** \n
> **\`${prefix}abone -> .abone \`** \n

`)
.setColor("BLUE")
return message.channel.send(erdems);
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