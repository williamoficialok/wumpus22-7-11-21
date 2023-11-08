const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    userbanned: String, 
    reason: String, 
    staff: String, 
});

module.exports = mongoose.model("forceban_users", Schema)