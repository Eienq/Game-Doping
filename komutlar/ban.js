const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");


exports.run = async(client, message, args) => {
  
    let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
     let yetkili = ayarlar.jailyetkili
  if (!message.member.hasPermission("BAN_ADD")) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDesciption(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`));
  let user = message.mentions.users.first()
    
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
    if(!user) return message.channel.send(acebot.setDescription(`Bir kişi etiketlemelisin.`))
    if(user.id === message.author.id) return message.channel.send(acebot.setDescription('Kendini banlayamazsın.'))
    if(user.id === client.user.id) return message.channel.send(acebot.setDescription('Botu banlayamazsın.'))
    if(user.id === message.guild.ownerID) return message.channel.send(acebot.setDescription ('Sunucu sahibini banlayamazsın.'))
    if (!message.guild.member(user).bannable) return message.channel.send(acebot.setDescription(' Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.'));

   message.channel.send(acebot.setDescription('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?')).then(async m => {
   	 m.react('✅').then(r =>{ const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{message.guild.members.cache.get(user.id).ban({reason: `${sebep}`})
      let embed = acebot.setDescription(`${user} adlı kullanıcı ${message.author.id} tarafından \`${sebep}\` sebebi ile banlandı. `)
    message.channel.send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send(acebot.setDescription('Banlama işlemi iptal edildi.'))
      })()
    })
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