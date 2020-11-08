const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!user) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('Kimi banlayacağını yazmalısın.')).catch(console.error);
  if (reason.length < 1) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('Ban sebebini yazmalısın.'));
  guild.members.ban(user, { reason: reason });
  message.channel.send("Kullanıcı başarıyla banlandı.")

  const embed = new Discord.MessageEmbed()
    .setColor(0x000000)
    .setTimestamp()
    .setAuthor('Bir Üye Banlandı')
    .addField('Banlanan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Banlayan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Banlanma Sebebi', reason);
client.channels.cache.get('774349665700675615').send(embed)
  
    let embed1 = new Discord.MessageEmbed() 
.setDescription(`${user} Adlı Kişi Sunucudan Yasaklandı! `) 
.setColor("BLACK")
return message.channel.send(embed1);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "mod"
};
exports.help = { 
	name: 'ban', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}