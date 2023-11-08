const db = require('quick.db');
const dbm = require('megadb');
const Discord = require("discord.js");
var colors = require('colors');
const canvas = require('canvas')
const fs = require("fs");
const client = new Discord.Client({
   partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
   intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"], 
  });
const config = require("./config.js");

const disbut = require('discord-buttons');
disbut(client);

const mongoose = require('mongoose');

mongoose.connect(`${config.MongoDB}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//.then(db => console.log('[DB] MongoDB conectado correctamente'))

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "logs/./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        embedColor: "RANDOM",
        reaction: `🎉`
    }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
});

const addexp = require("./commands/utils/levelup.js")


client.commands = new Discord.Collection();
client.aliasComm = new Discord.Collection();
client.queue = new Map()
client.snipe = new Map();

//┏━━━━━━━━━━━━━━━━━━━━━━━━COMMAND LOADER━━━━━━━━━━━━━━━━━━━━━━━━━━━┓


//console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓".bold.brightGreen)
fs.readdir("./commands/bienvenidas", (err, files) => {
  if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/bienvenidas/${file}`);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
    });
  });

fs.readdir("./commands/staffteam", (err, files) => {
if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/staffteam/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/diversion", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/diversion/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/musica", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/musica/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});


fs.readdir("./commands/moderacion", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderacion/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/nsfw", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/utils", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utils/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/sorteos", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/sorteos/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/administracion", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/administracion/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/economia", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/economia/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/vip", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/vip/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/juegos", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/juegos/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/backups", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/backups/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);

  });
});

fs.readdir("./commands/interaccion", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/interaccion/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);

  });
});

fs.readdir("./commands/wumpus", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/wumpus/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);

  });
});

fs.readdir("./commands/configuracion", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/configuracion/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);

  });
});

fs.readdir("./commands/testing", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/testing/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);

  });
});
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━END COMMAND LOADER━━━━━━━━━━━━━━━━━━━━━━━━━┛


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━EVENT LOADER━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━END EVENT LOADER━━━━━━━━━━━━━━━━━━━━━━━━━┛

//require(__dirname + "/partials/serverex.js")

client.login(config.token);