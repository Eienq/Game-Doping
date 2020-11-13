const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
      var toplamEtiketliUyeler = message.guild.members.cache.filter(member => member.user.username.includes("TAGINIZ")).size

      
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  ace_kod = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
    const acebots  = new Discord.MessageEmbed() 
        .setColor("#ff0000")
        .addField(`<a:sagok:757855573554233396> **Sunucudaki Toplam Üye Sayısı**`,`» **${message.guild.memberCount}**`)
        .addField(`<a:sagok:757855573554233396> **Seslideki Üye Sayısı**`,`» **${count}**`) 
        .addField(`<a:sagok:757855573554233396> **Taglı Alan Üye Sayısı.**`, `» **${toplamEtiketliUyeler}**`) 
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
             .setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

    message.channel.send(acebots);
} 



                                                          
exports.conf = {
    enabled: true,                          
    aliases: ["say"], 
    permLevel: 0                                  
}; 


exports.help = {
    name: 'say', 
    description: 'Say', 
    usage: 'say'
}