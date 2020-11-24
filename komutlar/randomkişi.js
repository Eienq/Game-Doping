const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(message.guild.members.cache.random().displayName)
    .setFooter('bot ismi')
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-kullanıcı'
};