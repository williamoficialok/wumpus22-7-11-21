const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    User: String,
    Nombre: String,
    Bio: String,
});

module.exports = mongoose.model("wb_information", Schema)

/*
- Age
- Gender
- Birthday
- Bio
- Favorite Color
Soon =) 
*/