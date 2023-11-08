const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    guildid: "String",
    schannelid: "String", 
});

module.exports = mongoose.model("wb_prefixies", Schema) 