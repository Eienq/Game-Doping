const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        if(args[0] && isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                       .setDescription(`Doğru Kullanım \n **.çek <kazanacak-kişi-sayısı> , <@yedek-üye-sayısı> \n\n Örnek Kullanım:** \n .çek 3 3`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(args[1] && isNaN(args[1])) {
                const embed = new Discord.RichEmbed()
                 .setDescription(`Doğru Kullanım \n **.çek <kazanacak-kişi-sayısı> , <@yedek-üye-sayısı> \n\n Örnek Kullanım:** \n .çek 3 3`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(!args[0]) {
                const embed = new Discord.RichEmbed()
                  .setDescription(`Doğru Kullanım \n **.çek <kazanacak-kişi-sayısı> , <@yedek-üye-sayısı> \n\n Örnek Kullanım:** \n .çek 3 3`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(!args[1]) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Doğru Kullanım \n **.çek <kazanacak-kişi-sayısı> , <@yedek-üye-sayısı>**`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }

if(args[0] <= 0) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen sıfırdan büyük bir sayı yazın!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
  
}
 if(args[1] <= 0) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen sıfırdan büyük bir sayı yazın!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(Number(Number(args[0]) + Number(args[1])) > Number(message.guild.members.filter(k => !k.user.bot).size)) return message.channel.send(`Girdiğiniz değerlerin toplamı fazla büyük! lütfen sunucudaki üye sayısından değerinden küçük olsun!`)

        var gg = ''
        var ggk = []
        var gg2 = ''
        var gg2k = []
 
        for(var i = 0; i < args[0]; i++) {
                var u = message.guild.members.filter(k=> !k.user.bot && !ggk.includes(k.user.id)).random().id
                gg += `${i+1}. <@${u}>\n`
                ggk.push(u)
        }
 
        for(var z = 0; z < args[1]; z++) {
                var u = message.guild.members.filter(k=> !k.user.bot && !ggk.includes(k.user.id) && !gg2k.includes(k.user.id)).random().id
                gg2 += `${z+1}. <@${u}>\n`
                gg2k.push(u)
        }
 
 
        const embed = new Discord.RichEmbed()
                .setAuthor(`Rastgele Üye Sonuçları`)
                .setDescription(`Kazananlar:\n${gg}\nYedek Kazananlar:\n${gg2}`)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['çek', 'şanslı-kişi', 'rastgeleüye'],
        permLevel: 2
}
 
exports.help = {
        name: 'çekk',
        description: 'Rastgele üye çekmenizi sağlar.',
        usage: 'çek [kazanan sayısı] [yedek sayısı]'
}