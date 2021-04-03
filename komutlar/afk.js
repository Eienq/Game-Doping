const db = require("quick.db")
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  
  let erdembot = new Discord.MessageEmbed().setColor('BLU').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
  let prefix  = ayarlar.prefix

 

    var user = message.author;
  var sebep = args.slice(0).join("  ");
  
 
  const erdems = erdembot 
  .setDescription(`**AFK moduna geçmek için bir sebep belirtmelisin.**\n\n >Örnek Kullanım: **\`${prefix}afk <sebep>\`**`)
  if(!sebep) return message.channel.send(erdems);
  
   db.set(`name.${message.author.id}.${message.guild.id}`, message.member.displayName);
message.member.setNickname('[AFK] '+message.member.displayName);
  
  db.set(`afk_${user.id}`, sebep);
  db.set(`afk_süre_${user.id}`, Date.now());
  
  const erdembotss = erdembot
  .setDescription(` ${user.tag} **Başarıyla \`${sebep}\`Sebebiyle AFK moduna girdin.**`)
  message.channel.send(erdembotss)


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