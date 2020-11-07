const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('768796888971345921')) return message.channel.sendEmbed(new Discord.RichEmbed().setColor("RED").setDescription('Bu komutu kullanabilmek için \`Commanders\` yetkisine sahip olmalısın!') );
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setColor("RED").setDescription('Bir üye etiketlemen gerekiyor!'));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription("Jaile atmak için sebep belirtmelisin!")).then(m => m.delete(5000));
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) //DCS EKİPİ

   
})
  member.addRole('752513177236930571')
     const kanal = message.guild.channels.find(c => c.id == "768797576848867339") // DCS EKİPİ
    const embed1 = new Discord.RichEmbed() 
    .setAuthor('Bir Üye Cezalıya Atıldı')
    .addField(`Jaile Atılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jaile Atan Yetkili`,` <@${message.author.id}>`)
  .addField(`Jaile Atılma Sebebi`, `${reason} `)
                          .setThumbnail(message.author.avatarURL)

    .setColor("GREEN")
 .setFooter(`${message.author.tag} tarafından komut kullanılmıştır..`, message.author.avatarURL)
    .setTimestamp()
  // DCS EKİPİ
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} Adlı Kişisinin Tüm Rolleri Alınarak, <@&752513177236930571> Rolü Verildi! `) 
                      .setThumbnail(message.author.avatarURL)

 .setFooter(`${message.author.tag} tarafından komut kullanılmıştır..`, message.author.avatarURL)
  .setTimestamp()
      .setColor("GREEN")

  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete(5000000));
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebe'
}