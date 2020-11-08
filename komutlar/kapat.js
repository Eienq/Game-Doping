const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(
          "Sohbet Kanalını Kapatabilmeniz İçin `Kanalları Yönet` Yetkisine Sahip Olmalısın.",
        )
     
    );

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });


  message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(
    "**Sohbet Kanalı Başarıyla Kapatıldı.**"
  ));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-k"],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-kapat',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'kapat'
};