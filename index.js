const Discord = require("discord.js");
const Client = new Discord.Client;
const prefix = "*";
var list = [];

const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const dbdb = new FileSync("db.json")
const db = low(dbdb)

db.defaults({Infos_membres: []}).write()


/*ROUGE : FF0000
  VERT  : 00FF00 
  ORANGE: FFA600
  */


Client.on("ready", () => {
    console.log("Le bot est opérationnel");

    Client.user.setStatus("online")
        const statuses = [
            "préfix : *",
            "pas grand chose",
            "en service",
            "préfix : *",
            "invite tes potes !",
            "2020 best année🤓"
        ]
        let i = 0
        setInterval(() => {
            Client.user.setActivity(statuses[i], {type: "PLAYING"})
            i = ++i % statuses.length
        }, 30000)

    //Règlement
    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "706462941054107710").messages.fetch("805921630265147392").then(message => {
        console.log("Message ajouté à la mémoire : règlement du serveur ");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    //Choix des rôles 
    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160214777495612").then(message => {
        console.log("Message ajouté à la mémoire : rôles aventure");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160229084659733").then(message => {
        console.log("Message ajouté à la mémoire : rôles course");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160246998663229").then(message => {
        console.log("Message ajouté à la mémoire : rôles fps");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160260424892416").then(message => {
        console.log("Message ajouté à la mémoire : rôles gestion / wargames");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160274290999308").then(message => {
        console.log("Message ajouté à la mémoire : rôles mmo / mmorpg");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160288975126550").then(message => {
        console.log("Message ajouté à la mémoire : rôles plateforme");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160304486055966").then(message => {
        console.log("Message ajouté à la mémoire : rôles rpg");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160319984009236").then(message => {
        console.log("Message ajouté à la mémoire : rôles simulation");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160336212164609").then(message => {
        console.log("Message ajouté à la mémoire : rôles sport");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "668483392722960414").channels.cache.find(channel => channel.id === "798933238445244426").messages.fetch("831160356810260492").then(message => {
        console.log("Message ajouté à la mémoire : rôles autre");
    }).catch(err =>{
        console.log("Le message n'a pas pu être ajouté à la mémoire : " + err);
    });
});



//Commande membre ajouté
Client.on("guildMemberAdd", member => {
    //Message privé pour l'ajout d'un membre
    member.send("Salut <@" + member.id + "> ! Bienvenue sur le serveur **Delta Gaming** !\nPour profiter au maximum du serveur Delta Gaming, je te conseille d'aller **accepter le <#706462941054107710>** et de **choisir tes rôles** dans le channel <#798933238445244426>.\n**Si tu es perdu(e) dans le serveur**, utilise le salon <#786676006421397574> ou le salon <#707270613810544650> pour poser tes questions !");
    
    //Message de bienvenue dans le channel arrivée
    member.guild.channels.cache.find(channel => channel.id === "820974843784200202").send("Hey <@" + member.id + ">, bienvenue sur le serveur **Delta Gaming** ! On espère que tu vas bien t'amuser ici ! 😁");

    //Logs serveur
    var embed = new Discord.MessageEmbed()
        .setColor("00FF00")
        .setTitle("**MEMBRE ARRIVÉ**")
        .setDescription("**<@" + member.id + ">** a rejoint le serveur")
    member.guild.channels.cache.find(channel => channel.id === "816979853181976586").send(embed);
});
//Commande membre quitte
Client.on("guildMemberRemove", member => {

    //Logs serveur
    var embed = new Discord.MessageEmbed()
        .setColor("FF0000")
        .setTitle("**MEMBRE PARTI**")
        .setDescription("**<@" + member.id + ">** a quitté le serveur")
    member.guild.channels.cache.find(channel => channel.id === "816979853181976586").send(embed);
});





//-----REGLEMENT - ROLE MEMBRE-----
Client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.message.id === "805921630265147392"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("706435199616942082").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("REGLEMENT")
                    .setDescription("**<@" + mbr.id + ">** a accepté le règlement")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM("Rôle Membre attribué avec succès")
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
                user.createDM("Rôle Membre retiré avec succès")
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});



//-----CHOIX DES ROLES - REACTIONS ROLE-----

//ROLES AVENTURE
Client.on("messageReactionAdd", (reaction, user) => {
    //The Last of Us
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("810641686866034698").then(mbr => {
                console.log("Rôle 'The Last of Us' attribué avec succès pour " + mbr.displayName);
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("THE LAST OF US")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'The Last of Us'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'The Last of Us' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //God of War
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("810642002617827338").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("GOD OF WAR")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'God of War'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'God of War' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Zelda
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("810642188219711518").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("ZELDA")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Zelda'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Zelda' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Assasins Creed
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("810642220721242132").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("ASSASINS CREED")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Assasins Creed'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Assasins Creed' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Spider Man
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "5️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("810642375105839144").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("SPIDER MAN")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Spider Man'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Spider Man' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Terraria
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "6️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("786671690410754098").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("TERRARIA")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Terraria'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Terraria' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    //The Last of Us
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("810641686866034698").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("THE LAST OF US")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'The Last of Us' __le " + date + " à " + hours + "__")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'The Last of Us' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //God of War
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("810642002617827338").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("GOD OF WAR")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'God of War'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'God of War' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Zelda
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("810642188219711518").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("ZELDA")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Zelda'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Zelda' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Assasins Creed
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("810642220721242132").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("ASSASINS CREED")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Assasins Creed'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Assasins Creed' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Spider Man
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "5️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("810642375105839144").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("SPIDER MAN")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Spider Man'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Spider Man' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Terraria
    if(reaction.message.id === "831160214777495612"){
        if(reaction.emoji.name === "6️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("786671690410754098").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("TERRARIA")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Terraria'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Terraria' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});

//ROLES COURSE
Client.on("messageReactionAdd", (reaction, user) => {
    //Race Room
    if(reaction.message.id === "831160229084659733"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("823899065074450493").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("RACE ROOM")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Race Room'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Race Room' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Asseto Corsa
    if(reaction.message.id === "831160229084659733"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("823899604189052978").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("ASSETO CORSA")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Asseto Corsa'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Asseto Corsa' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //BeamNG
    if(reaction.message.id === "831160229084659733"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("830865223057539072").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("BEAMNG")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'BeamNG'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'BeamNG' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});

Client.on("messageReactionRemove", (reaction, user) => {
    //Race Room
    if(reaction.message.id === "831160229084659733"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("823899065074450493").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("RACE ROOM")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Race Room'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Race Room' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Asseto Corsa
    if(reaction.message.id === "831160229084659733"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("823899604189052978").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("ASSETO CORSA")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Asseto Corsa'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Asseto Corsa' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //BeamNG
    if(reaction.message.id === "831160229084659733"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("830865223057539072").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("BEAMNG")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'BeamNG'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'BeamNG' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});

//ROLES FPS
Client.on("messageReactionAdd", (reaction, user) => {
    //Overwatch
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812406011951841341").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("OVERWATCH")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Overwatch'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Overwatch' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Apex Legends
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812406269817782362").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("APEX LEGENDS")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Apex Legends'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Apex Legends' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Call of Duty
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812406567261306900").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("CALL OF DUTY")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Call of Duty'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Call of Duty' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Fortnite
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("708661904998137907").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("FORTNITE")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Fortnite'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Fortnite' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Valorant
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "5️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("709345038223671380").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("VALORANT")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Valorant'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Valorant' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //CS-GO
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "6️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("717269658142638181").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("13FF00")
                    .setTitle("CS-GO")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'CS-GO'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'CS-GO' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    //Overwatch
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812406011951841341").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("OVERWATCH")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Overwatch'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Overwatch' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Apex Legends
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812406269817782362").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("APEX LEGENDS")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Apex Legends'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Apex Legends' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Call of Duty
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812406567261306900").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("CALL OF DUTY")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Call of Duty'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Call of Duty' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Fortnite
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("708661904998137907").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("FORTNITE")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Fortnite'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Fortnite' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Valorant
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "5️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("709345038223671380").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("VALORANT")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Valorant'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Valorant' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //CS-GO
    if(reaction.message.id === "831160246998663229"){
        if(reaction.emoji.name === "6️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("717269658142638181").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("CS-GO")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'CS-GO'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'CS-GO' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});

//ROLES GESTION / WARGAMES + PLATEFORME + SPORT + AUTRE
Client.on("messageReactionAdd", (reaction, user) => {
    //Forge of Empire
    if(reaction.message.id === "831160260424892416"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("786665256222195732").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("FORGE OF EMPIRE")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Forge of Empire'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Forge of Empire' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Clash of Clans
    if(reaction.message.id === "831160260424892416"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("786661948129411073").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("CLASH OF CLANS")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Clash of Clans'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Clash of Clans' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Brawlhalla
    if(reaction.message.id === "831160288975126550"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("709345082943471627").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("BRAWLHALLA")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Brawlhalla'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Brawlhalla' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Fall Guys 
    if(reaction.message.id === "831160288975126550"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812407154518392832").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("FALL GUYS")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Fall Guys'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Fall Guys' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Fifa 
    if(reaction.message.id === "831160336212164609"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("717405145217892374").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("FIFA")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Fifa'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Fifa' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Rocket League 
    if(reaction.message.id === "831160336212164609"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("778672869844451339").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("ROCKET LEAGUE")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Rocket League'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Rocket League' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Osu! 
    if(reaction.message.id === "831160356810260492"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("778668943098380289").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("OSU")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Osu!'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Osu!' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Ktane 
    if(reaction.message.id === "831160356810260492"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("706511145032482818").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("KTANE")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Ktane'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Keep Talking and Nobody Explodes' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    //Forge of Empire
    if(reaction.message.id === "831160260424892416"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("786665256222195732").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("FORGE OF EMPIRE")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Forge of Empire'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Forge of Empire' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Clash of Clans
    if(reaction.message.id === "831160260424892416"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("786661948129411073").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("CLASH OF CLANS")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Clash of Clans'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Clash of Clans' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Brawlhalla
    if(reaction.message.id === "831160288975126550"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("709345082943471627").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("BRAWLHALLA")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Brawlhalla'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Brawlhalla' retiré avec succès");
                })
            }).catch(err => {
                 console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Fall Guys
    if(reaction.message.id === "831160288975126550"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812407154518392832").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("FALL GUYS")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Fall Guys'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Fall Guys' retiré avec succès");
                })
            }).catch(err => {
                 console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Fifa 
    if(reaction.message.id === "831160336212164609"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("717405145217892374").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("FIFA")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Fifa'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Fifa' retiré avec succès");
                })
            }).catch(err => {
                 console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Rocket League 
    if(reaction.message.id === "831160336212164609"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("778672869844451339").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("ROCKET LEAGUE")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Rocket League'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Rocket League' retiré avec succès");
                })
            }).catch(err => {
                 console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Osu! 
    if(reaction.message.id === "831160356810260492"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("778668943098380289").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("OSU")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Osu!'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Osu!' retiré avec succès");
                })
            }).catch(err => {
                 console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Ktane 
    if(reaction.message.id === "831160356810260492"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("706511145032482818").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("KTANE")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Ktane'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Keep Talking and Nobody Explodes' retiré avec succès");
                })
            }).catch(err => {
                 console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});

//ROLES MMO / MMORPG
Client.on("messageReactionAdd", (reaction, user) => {
    //World of Warcraft
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812406822065406033").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("WORLD OF WARCRAFT")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'World of Warcraft'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'World of Warcraft' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //League of Legends 
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("715919630442561567").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("LOL")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Lol'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'League of Legends' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Among Us
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("790237230156742706").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("AMONG US")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Among Us'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Among Us' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Minecraft
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("707163307689246740").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("MINECRAFT")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Minecraft'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Minecraft' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    //World of Warcraft
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812406822065406033").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("WORLD OF WARCRAFT")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'World of Warcraft'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'World of Warcraft' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //League of Legends
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("715919630442561567").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("LOL")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'League of Legends'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'League of Legends' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Among Us
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("790237230156742706").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("AMONG US")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Among Us'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Among Us' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Minecraft
    if(reaction.message.id === "831160274290999308"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("707163307689246740").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("MINECRAFT")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Minecraft'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Minecraft' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});

//ROLES RPG
Client.on("messageReactionAdd", (reaction, user) => {
    //Cyberpunk 2077
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812663674442743819").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("CYBERPUNK 2077")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Cyberpunk 2077'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Cyberpunk 2077' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Genshin Impact
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812663778013347840").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("GENSHIN IMPACT")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Genshin Impact'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Genshin Impact' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Hyper Scape
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("812663823659302932").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("HYPER SCAPE")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Hyper Scape'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Hyper Scape' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Brawl Stars
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("706510418125783074").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("BRAWL STARS")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Brawl Stars'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Brawl Stars' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Wolfy
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "5️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("790237572248109056").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("WOLFY")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Wolfy'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Wolfy' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    //Cyberpunk 2077
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812663674442743819").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("CYBERPUNK 2077")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Cyberpunk 2077'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Cyberpunk 2077' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Genshin Impact 
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812663778013347840").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("GENSHIN IMPACT")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Genshin Impact'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Genshin Impact' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Hyper Scape 
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("812663823659302932").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("HYPER SCAPE")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Hyper Scape'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Hyper Scape' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Brawl Stars 
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "4️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("706510418125783074").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("BRAWL STARS")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Brawl Stars'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Brawl Stars' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Wolfy
    if(reaction.message.id === "831160304486055966"){
        if(reaction.emoji.name === "5️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("790237572248109056").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("WOLFY")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Wolfy'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Wolfy' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }

});

//ROLES SIMULATION
Client.on("messageReactionAdd", (reaction, user) => {
    //GTA
    if(reaction.message.id === "831160319984009236"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("720907507995901992").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("GTA")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'GTA'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'GTA' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Euro Truck Sim 
    if(reaction.message.id === "831160319984009236"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("824318905416679424").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("EURO TRUCK SIM")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Euro Truck Sim'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Euro Truck Simulator' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
    //Farming Sim
    if(reaction.message.id === "831160319984009236"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("823900178914213940").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("00FF00")
                    .setTitle("FARMING SIM")
                    .setDescription("**<@" + mbr.id + ">** a ajouté le rôle 'Farming Sim'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Farming Simulator' attribué avec succès")
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être attribué : " + err);
            });
        }
    }
});
Client.on("messageReactionRemove", (reaction, user) => {
    //GTA
    if(reaction.message.id === "831160319984009236"){
        if(reaction.emoji.name === "1️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("720907507995901992").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("GTA")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'GTA'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'GTA' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Euro Truck Sim
    if(reaction.message.id === "831160319984009236"){
        if(reaction.emoji.name === "2️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("824318905416679424").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("EURO TRUCK SIM")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Euro Truck Sim'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Euro Truck Simulator' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
    //Farming Sim 
    if(reaction.message.id === "831160319984009236"){
        if(reaction.emoji.name === "3️⃣"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("823900178914213940").then(mbr => {
                var embed = new Discord.MessageEmbed()
                    .setColor("FF0000")
                    .setTitle("FARMING SIM")
                    .setDescription("**<@" + mbr.id + ">** a retiré le rôle 'Farming Sim'")
                Client.channels.cache.get("816979853181976586").send(embed)
                user.createDM().then(channel => {
                    channel.send("Rôle 'Farming Simulator' retiré avec succès");
                })
            }).catch(err => {
                console.log("Le rôle n'a pas pu être retiré : " + err);
            });
        }
    }
});


//-----SYSTEME D'XP-----
Client.on("message", async message => {
    let msgauthorid = message.author.id

    if(!db.get("Infos_membres").find({id: msgauthorid}).value()){
        db.get("Infos_membres").push({id: msgauthorid, xp: 1, niveau: 1, xp_p_niveau: 100}).write()
        console.log("C'est ok !")
    }else {
        let userxpdb = db.get("Infos_membres").filter({id: msgauthorid}).find("xp").value()
        let userxp = Object.values(userxpdb)
        let userniveaudb = db.get("Infos_membres").filter({id: msgauthorid}).find("niveau").value()
        let userniveau = Object.values(userniveaudb)
        let userpniveaudb = db.get("Infos_membres").filter({id: msgauthorid}).find("xp_p_niveau").value()
        let userpniveau = Object.values(userpniveaudb)

        let chiffre = [3, 4, 5, 6, 7]
        let index = Math.floor(Math.random() * (chiffre.length - 1 ) + 1)

        db.get("Infos_membres").find({id: msgauthorid}).assign({id: msgauthorid, xp: userxp[1] += chiffre[index]}).write()

        if(userxp[1] >= userpniveau[3]){
            db.get("Infos_membres").find({id: msgauthorid}).assign({id: msgauthorid, xp: userxp[1] = 1}).write()
            db.get("Infos_membres").find({id: msgauthorid}).assign({id: msgauthorid, niveau: userniveau[2] += 1}).write()
            db.get("Infos_membres").find({id: msgauthorid}).assign({id: msgauthorid, xp_p_niveau: userpniveau[3] += 10}).write()
            message.channel.send("GG <@" + message.author.id + ">, vous venez de passer au niveau " + userniveau[2] + ", il vous faut maintenant " + userpniveau[3] + " pour passer au niveau suivant !")
        }
    }
});



//-----MESSAGES - SALUER LES MEMBRES-----
Client.on("message", async message => {
    if(message.author.bot) return;

    if(message.content === "Salut !"){
        message.react("👋");
        message.channel.send("Bonjour !");
    }


    if(message.content.startsWith(prefix + "offline")){
        Client.user.setStatus("idle")
        Client.user.setActivity("EN MAINTENANCE", {type: "PLAYING"})
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
});


//-----PARTIE BOT MODERATEUR-----
Client.on("message", async message => {
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
                        var embed = new Discord.MessageEmbed()
                            .setColor("FFA600")
                            .setTitle("CLEAR")
                            .setDescription("**" + messages.size + " message(s)** a/ont été effacé(s) dans le channel " + message.channel.name)
                        Client.channels.cache.get("816979853181976586").send(embed)
                    }).catch(err => {
                        console.log("Erreur de clear : " + err);
                    });
                }
            }
        }
    }
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
                    var embed = new Discord.MessageEmbed()
                        .setColor("FF0000")
                        .setTitle("MEMBRE BANNI")
                        .setDescription("**<@" + mention.id + ">** a été banni par <@" + message.author.id + ">")
                    Client.channels.cache.get("816979853181976586").send(embed)
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
                    var embed = new Discord.MessageEmbed()
                        .setColor("FF0000")
                        .setTitle("MEMBRE KICK")
                        .setDescription("**<@" + mention.id + ">** a été kick par <@" + message.author.id + ">")
                    Client.channels.cache.get("816979853181976586").send(embed)
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
                var embed = new Discord.MessageEmbed()
                        .setColor("FF0000")
                        .setTitle("MEMBRE MUTE")
                        .setDescription("**<@" + mention.id + ">** a été mute par <@" + message.author.id + ">")
                Client.channels.cache.get("816979853181976586").send(embed)
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
                message.delete();
                message.channel.send(mention.displayName + " a été unmute avec succès ! " + "\n<@" + mention.id + ">, tu peux de nouveau parler !");
                var embed = new Discord.MessageEmbed()
                        .setColor("00FF00")
                        .setTitle("MEMBRE BANNI")
                        .setDescription("**<@" + mention.id + ">** a été unmute par <@" + message.author.id + ">")
                Client.channels.cache.get("816979853181976586").send(embed);
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
                var embed = new Discord.MessageEmbed()
                        .setColor("FF0000")
                        .setTitle("MEMBRE TEMPMUTE")
                        .setDescription("**<@" + mention.id + ">** a été tempmute par <@" + message.author.id + ">")
                    Client.channels.cache.get("816979853181976586").send(embed);
                setTimeout(function() {                    
                    mention.roles.add("706435199616942082");
                    mention.roles.remove("733969802007281676");
                    message.channel.send("<@" + mention.id + "> tu es désormais unmute, tu peux à présent parler de nouveau !");
                    var embed = new Discord.MessageEmbed()
                        .setColor("00FF00")
                        .setTitle("MEMBRE TEMPMUTE")
                        .setDescription("**<@" + mention.id + ">** n'est plus tempmute par <@" + message.author.id + ">")
                    Client.channels.cache.get("816979853181976586").send(embed)
                }, args[2] * 1000);
            }    
        }
    }
});



Client.login("Nzc3NDc3NTk2Mjk1NTk0MDA1.X7EAbw.L9wEHY5HWooZQ01F7HlsNZ6lJD4");