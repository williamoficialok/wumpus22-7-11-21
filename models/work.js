const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const economy = new Schema({
    user: { type: String },
    nombre: { type: String }
});

module.exports = mongoose.model("economia", economy)