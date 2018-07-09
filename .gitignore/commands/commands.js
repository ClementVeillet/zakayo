module.exports = class commands {
    static invite (message) {
    message.channel.send("Voici le lien our m'ajouter a votre serveur discord : https://discordapp.com/oauth2/authorize?client_id=462897527952244736&scope=bot&permissions=519564359")
    }
    static google (message) {
        let args = message.content.split(' ')
        args.shift()
        message.channel.send("Voici la recherche demandé : https://www.google.fr/search?q=" + args.join('+') + " !");
    }
    static youtube (message) {
        let args = message.content.split(' ')
        args.shift()
        message.channel.send("Voici la recherche demandé : https://www.youtube.com/results?search_query=" + args.join('+') + " !")
    }
    static si (message) {
        const Discord = require('discord.js')
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setTitle("__**Server Information**__")
        .setColor('#3f168a')
        .setThumbnail(sicon)
        .addField("Nom du serveur :", message.guild.name)
        .addField("Date de création :", message.guild.createdAt)
        .addField("Votre arrivée :", message.member.joinedAt)
        .addField("Membre total :", message.guild.memberCount)
        return message.channel.send(serverembed);
    }
    static id (message) {
        let mUser = message.guild.member(message.mentions.users.first())
        if (!mUser || mUser.id === message.author.id) return message.channel.send(`Votre id est ${message.author.id} !`)
        message.channel.send(`L'id de ${mUser} est ${mUser.id} !`)
    }
    static rps (message) {
        const Discord = require('discord.js')
        let args = message.content.split(' ')
        let random = Math.round(Math.random() * 2)
        if (args[1] === 'Feuille') {
            if (random === 0) return message.channel.send(`Zakayo a choisi Pierre\n${message.author} a choisi Feuille\n${message.author} a gagné ! :raised_hand:`)
            if (random === 1) return message.channel.send(`Zakayo a choisi Feuille\n${message.author} a choisi Feuille\nPersonne n'a gagné ! :raised_hand:`)
            if (random === 2) return message.channel.send(`Zakayo a choisi Ciseaux\n${message.author} a choisi Feuille\nZakayo a gagné ! :raised_hand:`)
        } else if (args[1] === 'Pierre') {
            if (random === 0) return message.channel.send(`Zakayo a choisi Pierre\n${message.author} a choisi Pierre\nPersonne n'a gagné ! :right_facing_fist:`)
            if (random === 1) return message.channel.send(`Zakayo a choisi Feuille\n${message.author} a choisi Pierre\nZakayo a gagné ! :right_facing_fist:`)
            if (random === 2) return message.channel.send(`Zakayo a choisi Ciseaux\n${message.author} a choisi Pierre\n${message.author} a gagné ! :right_facing_fist:`)
        } else if (args[1] === 'Ciseaux') {
            if (random === 0) return message.channel.send(`Zakayo a choisi Pierre\n${message.author} a choisi Ciseux\nZakayo a gagné ! :v:`)
            if (random === 1) return message.channel.send(`Zakayo a choisi Feuille\n${message.author} a choisi Ciseux\n${message.author} a gagné ! :v:`)
            if (random === 2) return message.channel.send(`Zakayo a choisi Ciseaux\n${message.author} a choisi Ciseux\nPersonne n'a gagné ! :v:`)
        } else {
            let rpsEmbed = new Discord.RichEmbed()
            .setTitle('__**Pierre Feuille Ciseux**__')
            .setDescription(`**Descripton** : Jouer au pierre feuille ciseaux.`)
            .setColor('#3f168a')
            .addField('Utilisation :', '_rps <choix>')
            .addField('Choix :', 'Pierre, Feuille, Ciseaux')
            .addField('Exemple :', `_rps Feuille`)
            .addField(':right_facing_fist: :v: :raised_hand:', 'Bonne chance !')
            message.channel.send(rpsEmbed)
        }
    }
    static ball (message) {
        const Discord = require('discord.js')
        let ball = Math.round(Math.random() * 9)
        let args = message.content.split(' ')
        args.shift()
        if (args.join('') === '') {
            let ballEmbed = new Discord.RichEmbed()
            .setTitle('__**8ball**__')
            .setColor('#3f168a')
            .setDescription(`**Descripton** : Répondre à votre question.`)
            .addField('Utilisation :', '_8ball <question>')
            .addField('Exemple :', '_8ball Je suis cool ?')
            return message.channel.send(ballEmbed)
        }
		if (ball === 0) return message.channel.send('Oui');
		if (ball === 1) return message.channel.send('Non');
		if (ball === 2) return message.channel.send('Sûrement');
		if (ball === 3) return message.channel.send('Sûrement pas');
		if (ball === 4) return message.channel.send('Bien sûr');
		if (ball === 5) return message.channel.send('Bien sûr que non');
		if (ball === 6) return message.channel.send('Je pense');
		if (ball === 7) return message.channel.send('Je pense pas');
		if (ball === 8) return message.channel.send('Peut-être');
		if (ball === 9) return message.channel.send('Peut-être pas');
    }
    static call (message) {
        const Discord = require('discord.js')
        let mUser = message.guild.member(message.mentions.users.first())
        if (!mUser) {
            let callEmbed = new Discord.RichEmbed()
            .setTitle('__**Call**__')
            .setColor('#3f168a')
            .setDescription('**Description** : Dire à une personne que vous voulez la voir en vocal.')
            .addField('Utilisation :', '_call <user>')
            .addField('Exemple :', '_call @TC_Dimz#5657')
            return message.channel.send(callEmbed)
        }
        if (mUser.id === message.author.id) return message.channel.send('Vous ne pouvez pas vous appeller vous-même !')
        return message.channel.send(`${mUser}, il y a ${message.author} qui veux vous avoir en vocal !`)
    }
    static pf (message) {
        let random = Math.round(Math.random() * 1)
        if (random === 0) return message.channel.send("J'ai choisi pile !")
        if (random === 1) return message.channel.send("J'ai choisi face !")
    }
    static nani (message) {
        let random = Math.round(Math.random() * 8)
        message.channel.send({
            files: [`./nani/nani${random+1}.jpg`] 
        })
    }
    static dice (message) {
        let random = Math.round(Math.random() * 5)
        message.channel.send(`Cela donne ${random+1} !`)
    }
    static clap (message) {
        const Discord = require('discord.js')
        let args = message.content.split(' ')
        args.shift()
        if (args.join('') === '') {
            let clapEmbed = new Discord.RichEmbed()
            .setTitle('__**Clap**__')
            .setColor('#3f168a')
            .setDescription('**Description** : Claper un message !')
            .addField('Utilisation :', '_clap <texte>')
            .addField('Exemple :', '_clap Bonjour !')
            return message.channel.send(clapEmbed)
        }
        message.channel.send(`**:clap: ${message.author.username} : :clap: ${args.join(' ')} :clap:**`).then((message)=> {
            message.react('👏')
        })
    }
    static kill (message) {
        let vkill = Math.round(Math.random() * 9)
			let userm = message.guild.member(message.mentions.users.first())
			if (userm === null || userm.id === message.author.id) return message.channel.send(message.author + " s'est suicidé.");
			if (vkill === 0) message.channel.send(userm + ' est tombé dans le vide.');
			if (vkill === 1) message.channel.send(userm + ' a quitté le jeu.');
			if (vkill === 2) message.channel.send(userm + ' à été tué par ' + message.author + '.');
			if (vkill === 3) message.channel.send(userm + ' à essayer de nager dans de la lave.');
			if (vkill === 4) message.channel.send(userm + ' à fait une chute mortelle.');
			if (vkill === 5) message.channel.send(userm + " s'est fait tué par un zombie.");
			if (vkill === 6) message.channel.send(userm + " s'est fait tué par un squelette."); 
			if (vkill === 7) message.channel.send(userm + " s'est fait exploser par un creeper.")
			if (vkill === 8) message.channel.send(userm + " s'est noyé.")
			if (vkill === 9) message.channel.send(userm + `s'est fait tiré dessus à ${Math.round(Math.random() * 100)+15}m.`)
    }
    static troll (message) {
        const Discord = require('discord.js')
        let gRole = message.guild.roles.find(`name`, "VIP+");
        if (!gRole) {
            message.guild.createRole({
             name: 'VIP+',
             color: '#ebdd11',
             position: 1,
             mentionable: true,
             hoist: true,
             })
        }
        let userm = message.guild.member(message.mentions.users.first())
        if (userm === null) {
            let trollEmbed = new Discord.RichEmbed()
            .setTitle('__**Troll**__')
            .setColor('#3f168a')
            .setDescription('**Description** : Troller une personne.')
            .addField('Utilisation :', '_troll <@pseudo>')
            .addField('Exemple :', '_troll <@!434027164816637993>')
            return message.channel.send(trollEmbed)
        }
        if (message.author.id === userm.id) return message.channel.send('Vous ne pouvez pas vous troll vous-même !')
        message.channel.send(`Bravo ${userm} vous avez gagné le role VIP+ !`)
        userm.send(`Bravo ${userm} vous avez gagné le role VIP+ sur le serveur ` + message.guild.name + ` !`)
        message.delete()
        userm.addRole(gRole.id)
        setTimeout(()=> {
            userm.removeRole(gRole.id)
            message.channel.send(`Ah, ${userm} on me dit dans mon oreille que ce n'est pas pour vous !`)
            userm.send(`Ah, ${userm} on me dit dans mon oreille que ce n'est pas pour vous !`)
        }, 15000)
    }
}