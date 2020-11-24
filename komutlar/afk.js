const db = require("quick.db")
const Discord = require("discord.js");

exports.run = function(client, message, args) {
  
  db.set(`name.${message.author.id}.${message.guild.id}`, message.member.displayName);
message.member.setNickname('[AFK] '+message.member.displayName);
  var user = message.author;
  var sebep = args.slice(0).join("  ");
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(`**AFK moduna geçmek için bir sebep belirtmelisin.**\n\n >Örnek Kullanım: **\`${prefix}\`**`)
  .setColor("#ff0000")
  if(!sebep) return message.channel.send(sebep2);
  
  db.set(`afk_${user.id}`, sebep);
  db.set(`afk_süre_${user.id}`, Date.now());
  const embed = new Discord.MessageEmbed()

  .setDescription(` ${user.tag} **Başarıyla \`${sebep}\`Sebebiyle AFK moduna girdin.**`)
  .setColor("#00ff51")

  message.channel.send(embed)


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
};