const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    guildid: String,
    langdb: String,
});

module.exports = mongoose.model("langs", Schema)