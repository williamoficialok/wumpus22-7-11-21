const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    User: String,
    Nombre: String,
    Bio: String,
});

//Estos son los datos que podemos guardar, hay más, pero ya no recuerdo xD.
//Texto = String
//Numeros (1, 2, 3) = Number; 
//Verdadero o falso (true/false) = boolean; 
//Cadena ("1", "2", "3") = No recuerdo xD
//Array (["Dato 1", "Dato 2", "Dato 3"];) = Array;

module.exports = mongoose.model("wb_information", Schema) //Esto es el nombre con el que se guardara la colección.