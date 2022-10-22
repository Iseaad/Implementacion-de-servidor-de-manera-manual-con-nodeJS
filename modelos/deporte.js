const mongoose=require("mongoose"); //importacion mongoose 

const deporteSchema = new mongoose.Schema({

    nombre: {type:String, required:true},
    numeroJugadores : {type:Number, required:true},
    pais: {type:String}
});

const Deporte=mongoose.model('Deporte', deporteSchema, 'deportes'); //pide 3 parametros, 1. nombre del modelo 2. ¿con base a que plantilla se genera el modelo? 3. el nombre de la colección a la que se enfocará el modelo.
module.exports = Deporte;
