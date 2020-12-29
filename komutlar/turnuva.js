const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let java = message.guild.roles.find('id', '793123562977230859')
    sahip.addRole(java.id)
    const embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('**🎄 Başarıyla Turnvaya Katıldın !**')
      .addField("**🎄 Turnuva Kuralları Hakkında Bilgi Almak İçin ve Turnuva Hakkında Fikir Sahibi Olmak İçin ;**","<#793121444820156456>")
      .setFooter(`${message.author.tag} Tarafından İstendi.`)
      message.channel.sendMessage(embed)
   
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["turnuva"]
};

exports.help = {
  name: "katıl",
  description: "js rolü",
  usage: "javascript"
};