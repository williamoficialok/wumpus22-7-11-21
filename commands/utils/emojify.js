const util = require("utildiscordjs");

module.exports = {
    nombre: ["emojify"],
    alias: ["emojisay"],
    run: async (client, message, args) => {

        const text = args.join(" ")
        if (!text) return message.reply("")
        if (text.lenght > 55) return message.reply("no")
        let ads = util.emojify(`${text}`);

        message.channel.send(ads)
    }
}