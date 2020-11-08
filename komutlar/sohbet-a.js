const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(
          "Sohbet Kanalını Açabilmeniz İçin `Kanalları Yönet` Yetkisine Sahip Olmalısın.",
        )
     
    );

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });


  message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription(
    "**Sohbet Kanalı Başarıyla Açıldı.**"
  ));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-a"],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-aç',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'aç'
};