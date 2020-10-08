module.exports.run = async(bot, message, args, idioma) => {
    const player = message.client.manager.players.get(message.guild.id);

    if(!player) return message.channel.send(idioma.vaporwave.nada)

    const { channel } = message.member.voice

    if(!channel) return message.channel.send(idioma.vaporwave.naota)

    if(channel.id !== player.voiceChannel) return message.channel.send(idioma.vaporwave.mesmo)

    if(player.vaporwave == false) {
        if(player.options.bassboost == true) {
            bot.manager.players.get(message.guild.id).setEQ(...new Array(6).fill(null).map((_, i) => ({ band: i, gain: 0.0 })));
            player.options.bassboost = false
        }
        player.setVaporwave(true)
        return message.channel.send(idioma.vaporwave.ativado)
    } 
    if(player.vaporwave == true) {
        player.setVaporwave(false)
        return message.channel.send(idioma.vaporwave.desativado)
    }
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase: []
}
exports.help = {
    nome: "vaporwave",
    descrição: "Ativa o filtro nightcore na música",
    uso: "vaporwave",
    categoria: "Filtros"
}