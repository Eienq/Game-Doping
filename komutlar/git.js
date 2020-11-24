const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix;
if(!message.member.permissions.has('MOVE_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Bu Komudu Kullanabilmek İçin, **\`Üyeleri Taşı\`** Yetkisine Sahip Olmalısın.**`));

if(message.member.voice.channel == undefined) return message.channel.send(new Discord.MessageEmbed()
.setDescription('Bir Sesli Kanalda Değilsin!'))
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed()
.setDescription('Bir Kullanıcı Etiketle!'));

if(message.author.id === message.mentions.members.first()) return;
if(message.mentions.members.first().voice.channel == undefined) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Etiketlediğin ${message.mentions.members.first()} Sesli kanalda yok.`))
message.guild.members.cache.get(message.author.id).voice.setChannel(message.mentions.members.first().voice.channel.id);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
}

exports.help = {
  name: 'git',
  description: 'Seslide ki Bir Üyenin Yanına Gidersiniz.',
  usage: 'git'
};