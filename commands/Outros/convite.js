const { MessageEmbed, Message } = require("discord.js")
const config = require("../../config.json")
module.exports.run = async(bot, message, args) => {
    let embed = new MessageEmbed()
    embed.setColor(config.color)
    embed.setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic: true, size: 2048})}`)
	embed.setDescription(`Olá ${message.author.tag} que bom que gostou das minhas funçoes :V\nEste é o [link de convite](https://discord.com/api/oauth2/authorize?client_id=731185772551733340&permissions=3163136&scope=bot)`)
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase: ["invite"]
}
exports.help = {
    nome: "convite",
    descrição: "Convite do bot",
    uso: "convite",
    categoria: "Outros"
}