module.exports = class help {
    static help (message) {
        const Discord = require('discord.js')
        let hEmbedBase = new Discord.RichEmbed()
        .setTitle('__**Help / Commandes de base**__')
        .setColor('#3f168a')
        .addField('_invite', `Avoir le lien d'invitation du bot.`)
        .addField(`_guild`, `Avoir le discord du créateur du bot.`)
        .addField(`_google`, `Créer un lien vers google.`)
        .addField(`_youtbe`, `Créer un lien vers youtube.`)
        .addField(`_ping`, `Calculer le ping du bot.`)
        .addField(`_serveurinfo`, `Donner des informations sur le serveur.`)
        .addField(`_botinfo`, `Donner des informations sur le bot.`)
        .addField(`_guild`, `Avoir le lien du discord du créateur du bot.`)
        .addField(`_membercount`, `Calculer le nombre de membres sur le serveur.`)
        .addField(`_new`, `Proposer une idée pour améliorer le bot.`)
        .addField(`_call`, `Informer une personne que vous voulez l'appeler.`)
        .addField(`_dieu`, `Connaître son dieu.`)
        let hEmbedFun = new Discord.RichEmbed()
        .setTitle('__**Help / Commandes de fun**__')
        .setColor('#3f168a')
        .addField(`_troll`, `Troller une personne.`)
        .addField(`_rps`, `Jouer au pierre feuille ciseaux avec zakayo.`)
        .addField(`_nani`, `Envoyer une image nani aleatoire.`)
        .addField(`_pf`, `Choisir en pile ou face.`)
        .addField(`_dice`, `Lancer un dé.`)
        .addField(`_clap`, `Claper un message.`)
        .addField(`_kill`, `Tuer une personne.`)
        let hEmbedAdmin = new Discord.RichEmbed()
        .setTitle('__**Help / Commandes admin**__')
        .setColor('#3f168a')
        .addField(`_kick`, `Kick une personne du serveur.`)
        .addField(`_ban`, `Ban une personne du serveur.`)
        .addField(`_addrole`, `Ajouter un role à une personne.`)
        .addField(`_removerole`, `Enlever un role à une personne.`)
        .addField(`_alert`, `Créer une alert.`)
        .addField(`_say`, `Faire parler le bot.`)
        .addField(`_mute`, `Mute une personne.`)
        .addField(`_unmute`, `Unmute une personne.`)
        .addField(`_clear`, `Supprimer un nombre de message.`)
        message.channel.send(`Vous avez reçu l'aide en privé ${message.author} !`)
        message.member.send(hEmbedBase)
        message.member.send(hEmbedFun)
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            message.member.send(hEmbedAdmin)
        }
    }
}