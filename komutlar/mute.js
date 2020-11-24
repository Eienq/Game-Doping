const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

const prefix = ayarlar.prefix;


module.exports.run = async (bot, message, args, member) => {
      
      let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
      let yetkili = ayarlar.muteyetkili
      let susturulmuş = ayarlar.susturulmuş
      let mutelogkanal = ayarlar.mutelog



   let acebots = acebot
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}> **yetkisine sahip olmalısın!**`)
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
 
 
  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!mutekisi) return message.channel.send(acebot.setDescription(`<a:basarisiz:757851005483221022> Lütfen bir kullanıcı etiketleyiniz!`));
  let sebep = args.splice(2, args.length).join(" ");
  let mutezaman = args[1] 
    if (!mutezaman) return message.channel.send(acebot.setDescription(`<a:basarisiz:757851005483221022> Lütfen bir zaman giriniz! \n 1 Saniye = 1s \n 1 Dakika = 1m \n 1 Saat = 1h \n 1 Gün = 1d`));

await mutekisi.roles.add(susturulmuş);
const ace = acebot
    .setAuthor("Bir Kullanıcı Susturuldu")
    .addField("**Kullanıcı:**", `<@${mutekisi.id}>`)
    .addField("**Yetkili:**", message.author)
    .addField("**Süre:**", args[1])
    .addField("**Sebep:**", `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`)
    .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
bot.channels.cache.get(mutelogkanal).send(ace)
message.channel.send(acebot.setDescription(`<@${mutekisi.id}> adlı kullanıcı susturuldu`));
  
  setTimeout(function() {mutekisi.roles.remove(susturulmuş)
    message.channel.send(acebot.setDescription(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`));
  }, ms(mutezaman));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["süreli-mute"],
  permLevel: 0
};

exports.help = {
  name: "smute",
  description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
  usage: "mute <@kullanıcı> <1s/1m/1h/1d>"
};
