const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");



exports.run = function(client, message, args) {
  
  let erdembots = new Discord.MessageEmbed().setColor('BLUE').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
  
  let toplam = message.guild.memberCount;
  let online = message.guild.members.cache.filter( only => only.presence.status != "offline").size;
   const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
      
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;    let boost = message.guild.premiumSubscriptionCount
  
  const erdemcode = erdembots
  
  .setDescription(`**Sunucudaki Kullanıcı Sayısı;** ${toplam} \n
  **Sesli Kanallarda Bulunan Kullanıcı Sayısı;** ${count}\n
  **Sunucudaki Boost Sayısı;** ${boost}`);
  message.channel.send(erdemcode)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "!say",
  desscription: "!say"
}; 