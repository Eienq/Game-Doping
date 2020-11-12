const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

const prefix = ayarlar.prefix;


module.exports.run = async (bot, message, args, member) => {

   let yetkiyok = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&770868327748599808> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 
if (!message.member.roles.cache.get("770868327748599808")) return message.channel.send(yetkiyok)//Yetkili İd
 
  let mutekisi = message.guild.member(
   message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!mutekisi)
    return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(
      `<a:basarisiz:757851005483221022> Lütfen bir kullanıcı etiketleyiniz!`));
  let sebep = args.splice(2, args.length).join(" ");
  let mutezaman = args[1]

  if (!mutezaman) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022> Lütfen bir zaman giriniz! \n 1 Saniye = 1s \n 1 Dakika = 1m \n 1 Saat = 1h \n 1 Gün = 1d`));

await mutekisi.roles.add('775801882752188426');//Verilecek Rol
const logkanal = new Discord.MessageEmbed()
    .setAuthor("Bir Kullanıcı Susturuldu")
    .addField("**Kullanıcı:**", `<@${mutekisi.id}>`)
    .addField("**Yetkili:**", message.author)
    .addField("**Süre:**", args[1])
    .addField("**Sebep:**", `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`)
    .setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setColor('#ffecbc')
    .setFooter(`Geliştirici qmi <3`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
   .setTimestamp()
bot.channels.cache.get('775358713723748372').send(logkanal)//Log Kanalı
message.channel.send(new Discord.MessageEmbed().setColor('#92dffe').setDescription(`<@${mutekisi.id}> adlı kullanıcı susturuldu`));
  

  setTimeout(function() {
  mutekisi.roles.remove('775801882752188426')//Alınacak Rol
    message.channel.send(new Discord.MessageEmbed().setColor('#bae800').setDescription(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`)
);
  }, ms(mutezaman));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tempmute"],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
  usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
};
