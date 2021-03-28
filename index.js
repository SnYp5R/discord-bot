const Discord = require("discord.js");
const Client = new Discord.Client;
const prefix = "*";
var list = [];



Client.on("ready", () => {
    console.log("Le bot est opérationnel");
    Client.user.setActivity("préfix : *", {type: "PLAYING"});
    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "706462941054107710").messages.fetch("805921630265147392").then(message => {
        console.log("Message ajouté à la mémoire : règlement du serveur ");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });
});



//Commande membre ajouté
Client.on("guildMemberAdd", member => {
    console.log(member.displayName + " est arrivé sur le serveur");
    member.send("Salut <@" + member.id + "> ! Bienvenue sur le serveur **Delta Gaming** !");
    member.send("Pour profiter au maximum du serveur Delta Gaming, je te conseille d'aller **accepter le <#706462941054107710>** et de **choisir tes rôles** dans le channel <#798933238445244426>");
    member.send("**Si tu es perdu(e) dans le serveur**, utilise le salon <#786676006421397574> ou le salon <#707270613810544650> pour poser tes questions !");

    member.guild.channels.cache.find(channel => channel.id === "798933238445244426").send("Hey <@" + member.displayName + ">, bienvenue sur le serveur **Delta Gaming** ! On espère que tu vas bien t'amuser ici ! 😁")
    member.guild.channels.cache.find(channel => channel.id === "816979853181976586").send("<@" + member.displayName + "> a rejoint le serveur.")
});
//Commande membre quitte
Client.on("guildMemberRemove", member => {
    console.log(member.displayName + " a quitté le serveur");
    member.send("Nous espérons te revoir bientôt !");
});





//-----REGLEMENT - ROLE MEMBRE-----
Client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.message.id === "805921630265147392"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("706435199616942082").then(mbr => {
                console.log("Rôle MEMBRE attribué avec succès pour " + mbr.displayName);
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    if(reaction.message.id === "805921630265147392"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("706435199616942082").then(mbr => {
                console.log("Rôle MEMBRE retiré avec succès pour " + mbr.displayName);
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});



//-----CHOIX DES ROLES - REACTIONS ROLE-----

            

Client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.message.id === "805921630265147392"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("706435199616942082").then(mbr => {
                console.log("Rôle MEMBRE attribué avec succès pour " + mbr.displayName);
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    if(reaction.message.id === "805921630265147392"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("706435199616942082").then(mbr => {
                console.log("Rôle MEMBRE retiré avec succès pour " + mbr.displayName);
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});



//-----MESSAGES - SALUER LES MEMBRES-----
Client.on("message", async message => {
    if(message.author.bot) return;

    if(message.content === "Salut Delta !"){
        message.react("👋");
        message.channel.send("Bonjour !");
    }
    

    

    



//-----MESSAGES - COMMANDE CLEAR-----
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.reply("Nombre de messages à effacer non ou mal écrit !");
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de messages à effacer non ou mal écrit !");
                }
                else {
                    message.channel.bulkDelete(number+1).then(messages => {
                        console.log("Suppression de " + messages.size + " messages réussi dans le channel " + message.channel.name);
                    }).catch(err => {
                        console.log("Erreur de clear : " + err);
                    });
                }
            }
        }
    }


//-----MESSAGES - COMMANDE HELP-----   
    /*if(message.content.startsWith(prefix + "help")){
        var embed = new Discord.MessageEmbed()
            .setColor("ff8300")
            .setTitle("_**LISTE DE MES COMMANDES**_")
            .addField
    }
    //EMBED
    
          /*.setColor("Couleur en héxadécimal")
            .setTitle("Titre de l'embed")
            .setURL("Lien du titre de l'embed")
            .setAuthor("Nom de l'auteur de l'embed", "[Icone]", "[Lien dans le pseudo]")
            .setDescription("Description du message")
            .setThumbnail("Image en haut à droite")
            .addField("", false)
            Champ vide : addField("\u200B", "\u200B", false)
            .setImage("Image principale au centre")
            .setTimestamp()
            .setFooter("Nom de l'auteur en bas à droite", "[Icone]")*/


    /*if(message.content.startsWith(prefix + "addEmbedAide1")){
        var embed1 = new Discord.MessageEmbed()
            .setColor("#ff0f00")
            .setTitle("__**AIDE ET REPERAGE SUR LE SERVEUR**__")
            .setDescription("Ce message est destiné à préciser le but de ce serveur et les moyens mis en place pour y arriver")
            .addField("*Quels sont les objectifs de ce serveur ?*", "Pour faire simple, ses objectifs sont de :\n- **Rassembler** les différentes cummunautés gaming en un serveur,\n- **Chercher des coéquipiers** (mates) sur différents jeux\n- Et, bien sûr, **à s'amuser !**", false)
        message.channel.send(embed1)

        var embed2 = new Discord.MessageEmbed()
            .setColor("#ff8300")
            .setTitle("**I. RASSEMBLER LES JOUEURS**")
            .setDescription("**Delta Gaming** a été créé et pensé par et pour rassembler les gamers d'un maximum de jeux et ainsi créer une **communauté de gaming inter-jeux** ! Comme vous le savez peut être, Discord limite le nombre de serveur que l'on peut rejoindre à **100** ; le fait de pouvoir utiliser ce serveur pour différents jeux permet de minimiser le nombre de serveur à rejoindre !")
        message.channel.send(embed2)

        var embed3 = new Discord.MessageEmbed()
            .setColor("#F4D03F")
            .setTitle("**II. CHERCHER DES COEQUIPIERS**")
            .setDescription("Le principal objectif de ce serveur est de rechercher des **mates** (ou coéquipiers) sur les jeux multijoueurs auxquels vous jouez. Pour cela, nous avons mis en place un **système de catégories** qui sont d'abord 'cachés' mais que vous pouvez faire apparaitre en choisissant le rôle du jeu voulu dans le salon **<#798933238445244426>** !")
        message.channel.send(embed3)

        var embed4 = new Discord.MessageEmbed()
            .setColor("#ECF0F1")
            .setTitle("**III. S'AMUSER**")
            .setDescription("Enfin, **Delta Gaming** a pour ambition d'être un serveur **convivial** et **chalereux**, car c'est avant tout pour prendre du **plaisir** que les jeux vidéos sont autant populaire ! N'hésitez pas à nous faire part de vos suggestions pour améliorer ce serveur dans le salon **<#785489460631961630>** (pour pouvoir accéder à ce salon, il est impératif d'avoir au préalable accepter le **<#706462941054107710>** du serveur)")
            .addField("\u200B", "\u200B", false)
            .addField("_**Remarques :**_", "Si vous vous sentez encore **perdu** sur le serveur ou que vous rencontrez un **problème** quelconque, n'hésitez pas à utiliser le système de **tickets** du serveur dans la catégorie **<#707270613810544650>** qui vous mets en liaison direct avec les membres du staff pour vous conseiller", false)
        message.channel.send(embed4)
    }*/
    

    /*if(message.content.startsWith(prefix + "addEmbedRedryde")){

        var embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            //*Couleur en héxadécimal
            .setTitle("Allez voir la dernière vidéo de Redryde !")
            //*Titre de l'embed
            .setURL("https://www.youtube.com/watch?v=R1sRqzHWZ1w")
            //*Lien du titre de l'embed
            .setAuthor("SnYp5R", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoex3jcrZXsKHBcK1AVbmhb3ZcKQf2gl7rg&usqp=CAU")
            //*Nom de l'auteur de l'embed + [Icone] + [Lien dans le pseudo]
            .setDescription("Allez lui donner de la force, il commence sur Youtube ! Regardez sa dernière vidéo [ici ](https://www.youtube.com/watch?v=R1sRqzHWZ1wo) !")

            .setThumbnail("https://yt3.ggpht.com/ytc/AAUvwnim_RP7RHXmELnOD78qxyqKFjNlPQCqyEpCsIl4pA=s88-c-k-c0x00ffffff-no-rj")
            //.addField("Titre du champ", "Contenu du champ", false)
            //Champ vide : addField("\u200B", "\u200B", false)
            .setImage("https://yt3.ggpht.com/ytc/AAUvwnim_RP7RHXmELnOD78qxyqKFjNlPQCqyEpCsIl4pA=s88-c-k-c0x00ffffff-no-rj")
            //*Image principale
            .setTimestamp()
            .setFooter("By SnYp5R", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoex3jcrZXsKHBcK1AVbmhb3ZcKQf2gl7rg&usqp=CAU")
            //*Nom de l'auteur en bas + [Icone]
        }*/


//-----MESSAGES - COMMANDE BAN-----   
    if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné !");
            }
            else{
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni avec succès !");
                }
                else{
                    message.reply("Impossible de bannir ce memnbre !");
                }
            }
        }
    }

//-----MESSAGES - COMMANDE KICK-----
    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné !");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick avec succès !");
                }
                else{
                    message.reply("Impossible de kick ce memnbre !");
                }
            }
        }
    }

//-----MESSAGES - COMMANDE MUTE-----
    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné !");
            }
             else{
                mention.roles.add("733969802007281676");
                mention.roles.remove("706435199616942082");
                message.reply(mention.displayName + " a été mute avec succès !");
            }    
        }
    }    
//-----MESSAGES - COMMANDE UNMUTE-----
    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné !");
            }
            else{
                mention.roles.remove("733969802007281676");
                mention.roles.add("706435199616942082");
                message.channel.send(mention.displayName + " a été unmute avec succès ! " + "\n<@" + mention.id + ">, tu peux de nouveau parler !");
            }    
        }
    }
    
//-----MESSAGES - COMMANDE TEMPMUTE-----
        if(message.member.hasPermission("KICK_MEMBERS")){
            if(message.content.startsWith(prefix + "tempmute")){
                let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné !");
            }
            else{
                let args = message.content.split(" ");

                mention.roles.add("733969802007281676");
                mention.roles.remove("706435199616942082");
                setTimeout(function() {                    
                    mention.roles.add("706435199616942082");
                    mention.roles.remove("733969802007281676");
                    message.channel.send("<@" + mention.id + "> tu es désormais unmute, tu peux à présent parler de nouveau !");
                }, args[2] * 1000);
            }    
        }
    }
});   



Client.login("Nzc3NDc3NTk2Mjk1NTk0MDA1.X7EAbw.aWGaS8ekRzMbzWvNkSG291JiYow");