const Discord = require('discord.js')
const bot = new Discord.Client()
const commands = require('./commands/commands')
const help = require('./commands/help')
var prefix = '_'
var noperm = ":x: Vous n'avez pas les perms suffisantes !"
var filtered = ["fdp", "pd", "connard", "connart", "connars", "connar", "bâtard", "batard", "batars", "batart", "batar", "bite", "ta mere", "abruti", "niqué", "niquer", "enculé", "enculer", "andouille", "bête", "bete", "bouffon", "boufon", "salop", "salope", "pute", "ta race", "rasse", "rase", "cassosse", "cassoce", "chatte", "bite"];

bot.on('ready', function() {
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    console.log("Le bot es prêt a être utilisé !")
    console.log('Nombre de serveur : ' + bot.guilds.size)
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    bot.user.setActivity('_help | ' + bot.guilds.size + ' serveurs | Zakayo')
    bot.user.setStatus("online");
    //bot.user.setAvatar('./logozakayo1.png')
});

bot.on('guildMemberAdd', function (member) {
    if (member.guild.id === '405415132177629186') {
        member.addRole('445970294956359682')
        member.addRole('454353752078549008')
        member.createDM().then(function(channel){
            channel.send('Bienvenue à toi sur le serveur **[FR] Gaming / Discussion** ! Pour parler tu dois accepter les règles !');
        });
        let bvn = new Discord.RichEmbed()
        member.guild.channels.find(c=>c.name.includes('bienvenu')).send('Bienvenue à ' + member + ' sur le serveur ! Accepte les règles dans <#410088360342847488> et va parler dans <#410086550639083520> !');
    } else {
        if (member.guild.channels.find(c=>c.name.includes('bienvenu'))) {
        member.guild.channels.find(c=>c.name.includes('bienvenu')).send('Bienvenue à ' + member + ' sur le serveur ' + member.guild.name + ' !');
        }
    }
});

bot.on('guildMemberRemove', function (member) {
    if (member.guild.id === '405415132177629186') {
        member.createDM().then(function(channel){
            channel.send('À bientôt sur le serveur **[FR] Gaming / Discussion** voici un lien por revenir ! https://discord.gg/ZWWmXRM');
        });
        member.guild.channels.find(c=>c.name.includes('bienvenu')).send('Au revoir à ' + member.displayName + ' ! Reviens bientôt sur le serveur **[FR] Gaming / Discussion** !');
    } else {
        if (member.guild.channels.find(c=>c.name.includes('bienvenu'))) {
        member.guild.channels.find(c=>c.name.includes('bienvenu')).send('Au revoir à ' + member.displayName + ' !');
        }
    }
});
// COMMANDES DU FICHIER COMMANDS
bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
        return message.channel.send(':x: Error : **Désolé je suis un bot, je ne peux donc pas vous répondre correctement mais je vous invite à rejoindre le discord de mon créateur : https://discord.gg/ZWWmXRM !**');
    }
	    for (var filter of filtered) {
        if (message.content.indexOf(filter) !== -1) {
            if (message.member.hasPermission('MANAGE_MESSAGES')) return;
            message.delete()
		message.channel.send('Surveille ton language ' + message.author + ' !').then((message) => {
			setTimeout(()=> {
				message.delete()
			}, 3000)
		})
        }
    }

    if (!message.content.startsWith(prefix)) return;
    if (message.content === prefix + 'ping') return message.channel.send('**Pong !** :ping_pong: ').then((message) => {message.edit(`**Pong !** :ping_pong: J'ai mis ${Math.round(bot.ping)}ms à répondre !`)});
    if (message.content === prefix + 'invite') return commands.invite(message);
    if (message.content === prefix + 'serveurinfo') return commands.si(message);
    if (message.content === prefix + 'guild') return message.channel.send('Voici le serveur de mon créateur : https://discord.gg/ZWWmXRM !')
    if (message.content.startsWith(prefix + 'id')) return commands.id(message)
    if (message.content.startsWith(prefix + 'rps')) return commands.rps(message)
    if (message.content.startsWith(prefix + '8ball')) return commands.ball(message)
    if (message.content.startsWith(prefix + 'call')) return commands.call(message)
    if (message.content === prefix + 'pf') return commands.pf(message)
    if (message.content === prefix + 'nani') return commands.nani(message)
    if (message.content === prefix + 'dice') return commands.dice(message)
    if (message.content.startsWith(prefix + 'clap')) return commands.clap(message)
    if (message.content.startsWith(prefix + 'kill')) return commands.kill(message)
    if (message.content === prefix + 'admintroll') return message.channel.send('Alexian troll les admins.')
    if (message.content === prefix + 'dieu') return message.channel.send(`Votre Dieu est Zayy' soumettez vous à lui`)
    if (message.content.startsWith(prefix + 'troll')) return commands.troll(message)
    // HELP

    if (message.content === prefix + 'help') return help.help(message)

});
// COMMANDES HORS DU FICHIER COMMANDS
bot.on('message', async message => {
    if (message.channel.type === 'dm') return;
    if (message.content == prefix + ('botinfo')) {
        let serverembed = new Discord.RichEmbed()
        .setTitle('__**Bot Info**__')
        .setColor('#3f168a')
        .setThumbnail(bot.user.avatarURL)
        .addField('Nom du bot', 'Zakayo')
  	    .addField('Créateur', 'TC_DiMz#5657')
        .addField('Site web', 'Très prochainement !')
        .addField('Nombre de serveur', bot.guilds.size)
        .addField('Nom des serveurs', bot.guilds.map(g=>g.name))
        return message.channel.send(serverembed);
    }
    if (message.content === prefix + 'membercount') {
        let MEmbed = new Discord.RichEmbed()
		.setDescription("__**Member Count**__")
        .setColor("#3f168a")
        .setThumbnail(message.guild.iconURL)
    	.addField("Nombre d'utilisateur total", message.guild.memberCount)
    	.addField("Nombre de membre", message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size)
    	.addField("Nombre de bot", message.guild.members.filter(m=>m.user.bot).size)
    	return message.channel.send(MEmbed)
    }
    if (message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ')
        args.shift()
        let newEmbed = new Discord.RichEmbed()
        .setTitle('__**Idée**__')
        .setDescription('Idée de ' + message.author)
        .setColor('#3f168a')
        .addField('Sur le serveur', message.guild.name)
        .addField('Idée', args.join(' '))
        bot.channels.get('462904305222156296').send(newEmbed)
		message.delete()
		return message.channel.send(message.author + ', votre idée a été envoyé.');
    }
});
// MODERATION COMMANDES
bot.on('message', async message =>{
    if (message.author.bot) return;
    let args = message.content.split(' ');
    let mUser = message.guild.member(message.mentions.users.first());
    let raison = args.join(' ')
    let mAuthor = message.author;
    if (message.content.startsWith(prefix + 'kick')) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(noperm)
        if (!mUser) return message.channel.send('Choisir une personne ! _kick <@pseudo> <raison>')
        if (mUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Cette personne ne peux pas être kick !')
        if (!raison) return message.channel.send('Choisir une raison ! _kick <@pseudo> <raison>')
        let kickEmbed = new Discord.RichEmbed()
        .setTitle('__**Kick**__')
        .setColor('#3f168a')
        .addField('Kické par', mAuthor)
        .addField('Personne kické', mUser)
        .addField('Raison', raison.slice(28))
        message.guild.member(mUser).kick(raison)
        return message.channel.send(kickEmbed)
    }
    if (message.content.startsWith(prefix + 'ban')) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(noperm)
        if (!mUser) return message.channel.send('Choisir une personne ! _ban <@pseudo> <raison>')
        if (mUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Cette personne ne peux pas être ban !')
        if (!raison) return message.channel.send('Choisir une raison ! _ban <@pseudo> <raison>')
        let kickEmbed = new Discord.RichEmbed()
        .setTitle('__**Ban**__')
        .setColor('#3f168a')
        .addField('Banni par', mAuthor)
        .addField('Personne banni', mUser)
        .addField('Raison', raison.slice(27))
        message.guild.member(mUser).ban(raison.slice())
        return message.channel.send(kickEmbed)
    }
    if (message.content.startsWith( prefix + 'mute')) {
        let role = message.guild.roles.find(r => r.name === "Muted");
        let toMute = message.guild.member(message.mentions.users.first())
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(noperm)
        if(!role){
            try {
              role = await message.guild.createRole({
                name: "Muted",
                color:"#000000",
                permissions:[]
              });
      
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            } catch (e) {
              console.log(e.stack)
            }
          }
        if (!toMute) return message.channel.send('Choisir une personne ! _mute <@pseudo>')
        if (toMute.hasPermission('KICK_MEMBERS')) return message.channel.send('Cette personne ne peux pas être mute !')
        if (toMute.roles.has(role.id)) return message.channel.send('Cette personne est déjà muté !')
        toMute.addRole(role)
        return message.channel.send(`${toMute} est désormais muté !`)
    }
    if (message.content.startsWith( prefix + 'unmute')) {
        let role = message.guild.roles.find(r => r.name === "Muted");
        let toMute = message.guild.member(message.mentions.users.first())
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(noperm)
        if(!role){
            try {
              role = await message.guild.createRole({
                name: "Muted",
                color:"#000000",
                permissions:[]
              });
      
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            } catch (e) {
              console.log(e.stack)
            }
          }
        if (!toMute) return message.channel.send('Choisir une personne ! _unmute <@pseudo>')
        if (toMute.hasPermission('KICK_MEMBERS')) return message.channel.send('Cette personne ne peux pas être unmute !')
        if (!toMute.roles.has(role.id)) return message.channel.send(`Cette personne n'est pas muté !`)
        toMute.removeRole(role)
        return message.channel.send(`${toMute} est désormais unmuté !`)
    }
    if (message.content.startsWith(prefix + 'addrole')) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(noperm)
        let role = args.join(' ').slice(31)
        let grole = message.guild.roles.find('name', role)
        if (!mUser) return message.channel.send('Choisir une personne ! _addrole <@pseudo> <role>')
        if (!role) return message.channel.send('Choisir un role ! _addrole <@pseudo> <role>')
        if (!grole) return message.channel.send(`Le role "${role}" n'a pas été trouvé !`)
        if (mUser.roles.has(grole.id)) return message.channel.send('Cette personne a déjà ce role !')
        message.channel.send(`${mUser} à reçu le role ${grole.name}`)
        mUser.addRole(grole.id)
    }
    if (message.content.startsWith(prefix + 'removerole')) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(noperm)
        let role = args.join(' ').slice(34)
        let grole = message.guild.roles.find('name', role)
        if (!mUser) return message.channel.send('Choisir une personne ! _addrole <@pseudo> <role>')
        if (!role) return message.channel.send('Choisir un role ! _addrole <@pseudo> <role>')
        if (!grole) return message.channel.send(`Le role "${role}" n'a pas été trouvé !`)
        if (!mUser.roles.has(grole.id)) return message.channel.send(`Cette personne n'a pas ce role !`)
        message.channel.send(`${mUser} à été enlevé du role ${grole.name}`)
        mUser.removeRole(grole.id)
    }
});

// REACTION

const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
    if (message.channel.type === 'dm') return;
    if (!events.hasOwnProperty(event.t)) return;
  
    const { d: data } = event;
    const user = bot.users.get(data.user_id);
    const channel = bot.channels.get(data.channel_id) || await user.createDM();
  
    if (channel.messages.has(data.message_id)) return;
  
    const message = await channel.fetchMessage(data.message_id);
    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    let reaction = message.reactions.get(emojiKey);
  
    if (!reaction) {
      const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
      reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
    }
  
    bot.emit(events[event.t], reaction, user);
  });

  bot.on('messageReactionAdd', async (reaction, user)=>{
    if (message.channel.type === 'dm') return;
    // GAME ZAKAYO !!
    if (reaction.message.content.startsWith('[JEUX]') && reaction.message.guild.id === '405415132177629186') {
      reaction.message.react('460384650393550848').then((message)=> {
      reaction.message.react('460385999986491392')
      reaction.message.react('460387641204932608')
      reaction.message.react('460388303812821003')
      reaction.message.react('460388413669900289')
      reaction.message.react('460388502966632478')
      reaction.message.react('460388596860452864')
      })
      if (reaction.emoji.id === '460384650393550848') {
        let rminecraft = reaction.message.guild.roles.find(`name`, `Minecraft`);
        reaction.message.guild.members.get(user.id).addRole(rminecraft.id)
        user.send('Vous avez reçu le role "Minecraft" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460385999986491392') {
        let rfortnite = reaction.message.guild.roles.find(`name`, `Fortnite`);
        reaction.message.guild.members.get(user.id).addRole(rfortnite.id)
        user.send('Vous avez reçu le role "Fortnite" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460387641204932608') {
        let roverwatch = reaction.message.guild.roles.find(`name`, `Overwatch`);
        reaction.message.guild.members.get(user.id).addRole(roverwatch.id)
        user.send('Vous avez reçu le role "Overwatch" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388303812821003') {
        let rlol = reaction.message.guild.roles.find(`name`, `League Of Legends`);
        reaction.message.guild.members.get(user.id).addRole(rlol.id)
        user.send('Vous avez reçu le role "League Of Legends" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388413669900289') {
        let rosu = reaction.message.guild.roles.find(`name`, `Osu`);
        reaction.message.guild.members.get(user.id).addRole(rosu.id)
        user.send('Vous avez reçu le role "Osu" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388502966632478') {
        let rpubg = reaction.message.guild.roles.find(`name`, `PUBG`);
        reaction.message.guild.members.get(user.id).addRole(rpubg.id)
        user.send('Vous avez reçu le role "PUBG" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388596860452864') {
        let rgmod = reaction.message.guild.roles.find(`name`, `Garry's Mod`);
        reaction.message.guild.members.get(user.id).addRole(rgmod.id)
        user.send(`Vous avez reçu le role "Garry's Mod" sur le serveur ` + reaction.message.guild.name + ' !')
      }
      else {
        reaction.remove(user)
      }
    }
  
  
    // NOTIF DU SERVEUR !
  
    if (reaction.message.content.startsWith('[NOTIF]')) {
      let annonce = reaction.message.guild.roles.find(`name`, `Notif Annonce`);
      let sondage = reaction.message.guild.roles.find(`name`, `Notif Sondage`);
      let concours = reaction.message.guild.roles.find(`name`, `Notif Concours`);
      let zakayo = reaction.message.guild.roles.find(`name`, `Notif Zakayo`);
      let all = reaction.message.guild.roles.find(`name`, `Notif Everyone`);
      try {
        if (all) await reaction.message.react('💰')
        if (annonce) await reaction.message.react('🔔')
        if (sondage) await reaction.message.react('✨')
        if (coucours) await reaction.message.react('🎉')
        if (zakayo) await reaction.message.react('🎮')
      } catch (error) {
        console.log('Error [NOTIF] du serv ' + reaction.message.guild.members.get(user.id).guild.name)
      }
      if (reaction.emoji.name === '🔔') {
        if (!annonce) return reaction.remove(user);
        reaction.message.guild.members.get(user.id).addRole(annonce.id)
        user.send('Vous avez reçu le role "Notif Annonce" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '✨') {
        if (!sondage) return reaction.remove(user);
        reaction.message.guild.members.get(user.id).addRole(sondage.id)
        user.send('Vous avez reçu le role "Notif Sondage" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '🎉') {
        if (!concours) return reaction.remove(user);
        reaction.message.guild.members.get(user.id).addRole(concours.id)
        user.send('Vous avez reçu le role "Notif Concours" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '🎮') {
        if (!zakayo) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).addRole(zakayo.id)
        user.send('Vous avez reçu le role "Notif Zakayo" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '💰') {
        if (!all) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).addRole(all.id)
        user.send('Vous avez reçu le role "Notif Everyone" sur le serveur ' + reaction.message.guild.name + ' !')
      } else {
        reaction.remove(user)
      }
    }
    // ENABLE RULES
  
    if (reaction.message.content.startsWith("[RÈGLES]") && reaction.message.guild.id === '405415132177629186') {
      reaction.message.react('✅')
      if (reaction.emoji.name === '✅') {
        let membre = reaction.message.guild.roles.find(`name`, `/ Membre /`);
        let nouveau = reaction.message.guild.roles.find('name', ('/ Nouveau /'))
        reaction.message.guild.members.get(user.id).addRole(membre.id)
        reaction.message.guild.members.get(user.id).removeRole(nouveau.id)
      } else {
        reaction.remove(user)
      }
    }
  
  });
  
  bot.on('messageReactionRemove', (reaction, user)=>{
    if (message.channel.type === 'dm') return;
  
  // POUR LE ZAKAYO GAME
  
    if (reaction.message.content.startsWith('[JEUX]') && reaction.message.guild.id === '405415132177629186') {
      if (reaction.emoji.id === '460384650393550848') {
        let rminecraft = reaction.message.guild.roles.find(`name`, `Minecraft`);
        reaction.message.member.removeRole(rminecraft.id)
        user.send('Vous avez été enlevé du role "Minecraft" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460385999986491392') {
        let rfortnite = reaction.message.guild.roles.find(`name`, `Fortnite`);
        reaction.message.guild.members.get(user.id).removeRole(rfortnite.id)
        user.send('Vous avez été enlevé du role "Fortnite" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460387641204932608') {
        let roverwatch = reaction.message.guild.roles.find(`name`, `Overwatch`);
        reaction.message.guild.members.get(user.id).removeRole(roverwatch.id)
        user.send('Vous avez été enlevé du role "Overwatch" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388303812821003') {
        let rlol = reaction.message.guild.roles.find(`name`, `League Of Legends`);
        reaction.message.guild.members.get(user.id).removeRole(rlol.id)
        user.send('Vous avez été enlevé du role "League Of Legends" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388413669900289') {
        let rosu = reaction.message.guild.roles.find(`name`, `Osu`);
        reaction.message.guild.members.get(user.id).removeRole(rosu.id)
        user.send('Vous avez été enlevé du role "Osu" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388502966632478') {
        let rpubg = reaction.message.guild.roles.find(`name`, `PUBG`);
        reaction.message.guild.members.get(user.id).removeRole(rpubg.id)
        user.send('Vous avez été enlevé du role "PUBG" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.id === '460388596860452864') {
        let rgmod = reaction.message.guild.roles.find(`name`, `Garry's Mod`);
        reaction.message.guild.members.get(user.id).removeRole(rgmod.id)
        user.send(`Vous avez été enlevé du role "Garry's Mod" sur le serveur ` + reaction.message.guild.name + ' !')
      }
    }
  
    // POUR LES NOTIFS
  
    if (reaction.message.content.startsWith('[NOTIF]')) {
      if (reaction.emoji.name === '🔔') {
        let annonce = reaction.message.guild.roles.find(`name`, `Notif Annonce`);
        if (!annonce) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).removeRole(annonce.id)
        user.send('Vous avez été enlevé du role "Notif Annonce" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '✨') {
        let sondage = reaction.message.guild.roles.find(`name`, `Notif Sondage`);
        if (!sondage) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).removeRole(sondage.id)
        user.send('Vous avez été enlevé du role "Notif Sondage" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '🎉') {
        let concours = reaction.message.guild.roles.find(`name`, `Notif Concours`);
        if (!concours) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).removeRole(concours.id)
        user.send('Vous avez été enlevé du role "Notif Concours" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '🎮') {
        let zakayo = reaction.message.guild.roles.find(`name`, `Notif Zakayo`);
        if (!zakayo) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).removeRole(zakayo.id)
        user.send('Vous avez été enlevé du role "Notif Zakayo" sur le serveur ' + reaction.message.guild.name + ' !')
      }
      else if (reaction.emoji.name === '💰') {
        let all = reaction.message.guild.roles.find(`name`, `Notif Everyone`);
        if (!all) return reaction.remove(user)
        reaction.message.guild.members.get(user.id).removeRole(all.id)
        user.send('Vous avez été enlevé du role "Notif Everyone" sur le serveur ' + reaction.message.guild.name + ' !')
      } else {
        reaction.remove(user)
      }
    }
    if (reaction.message.content.startsWith("[RÈGLES]") && reaction.message.guild.id === '405415132177629186') {
      if (reaction.emoji.name === '✅') {
        let membre = reaction.message.guild.roles.find(`name`, `/ Membre /`);
        let nouveau = reaction.message.guild.roles.find(`name`, `/ Nouveau /`);
        reaction.message.guild.members.get(user.id).removeRole(membre.id)
        reaction.message.guild.members.get(user.id).addRole(nouveau.id)
      } else {
        reaction.remove(user)
      }
    }
  });

bot.login(process.env.TOKENd);
