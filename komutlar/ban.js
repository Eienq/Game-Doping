const Discord = require('discord.js');

exports.run = async(client, message, args) => {

   let hata = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&770868327748599808> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 if (!message.member.roles.cache.get("YETKİLİ-")) return message.channel.send(hata)
	   let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Bir kişi etiketlemelisin.'))
     if(user.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Kendini banlayamazsın.'))
     if(user.id === client.user.id) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Botu banlayamazsın.'))
     if(user.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Sunucu sahibini banlayamazsın.'))
     if (!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('<a:basarisiz:757851005483221022> Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.'));


   client.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({reason: `${sebep}`})
      let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Kişi banlandı')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan kişi', user)
    .addField('Sebep', sebep)
client.channels.cache.get('LOG-KANAL-İD').send(embed)//Log Kanalı
       })
    }
 
 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}