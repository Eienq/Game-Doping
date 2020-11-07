const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db');

const prefix = ayarlar.prefix;


module.exports.run = async (bot, message, args, member) => {
  var muterol = db.fetch(`muterol_${message.guild.id}`)
  if (!muterol) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022> Sunucuda Mute Rolü Ayarlanmadığı İçin Komut Kullanılamaz! Not: Mute Rolü Ayarlamak İçin z!mrol @rol `))


  if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.reply(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022> Bunu yapabilmek için \`Üyeleri Sustur \`yetkisine sahip olmalısınız!`));
  let mutekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!mutekisi)
    return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(
      `<a:basarisiz:757851005483221022> Lütfen bir kullanıcı etiketleyiniz!`));
  if (mutekisi.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022> Yetkili bir kişiyi muteleyemem!`));
  let sebep = args.splice(2, args.length).join(" ");
  if (!muterol) {
    try {
      muterol = await message.guild.roles.create({
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.createOverwrite(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]

  if (!mutezaman) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022> Lütfen bir zaman giriniz! \n 1 Saniye = 1s \n 1 Dakika = 1m \n 1 Saat = 1h \n 1 Gün = 1d`));

await mutekisi.roles.add(muterol);
  message.channel.send(
    new Discord.MessageEmbed()
      .setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setColor('GREEN')
    .setAuthor("Bir Kullanıcı Susturuldu")
    .setTimestamp()
    .addField("**Kullanıcı:**", `<@${mutekisi.id}>`)
    .addField("**Yetkili:**", message.author)
    .addField("**Süre:**", args[1])
    .addField("**Sebep:**", `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`)
  );

  setTimeout(function() {
  mutekisi.roles.remove(muterol)
    message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setTimestamp().setDescription(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`)      .setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
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
