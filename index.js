const express = require ("express");  //se importa modulo express y se guarda en la variable 
const mongoose = require ("mongoose"); //importacion modulo mongoose
const deporte  = require ('./modelos/deporte');

const app = new express (); //instanciando o inicializando objeto tipo express  

//----------------conexiòn a la base de datos en mongodb atlas-------------------------//
mongoose.connect("mongodb+srv://Grupo23:Grupo23@clustergrupo23.gvrtivl.mongodb.net/Grupo23?retryWrites=true&w=majority");


//METODO listen nos pide dos parametros: 1. puerto al cual se conectará. 2. el objeto de tipo funcion call back.
//se puede usar una función tipo flecha:

app.listen (3000,()=>{  // si la aplicacion se conecta por el puerto 3000 ejecutará la function solicitada
console.log ("Servidor ejecutandose por el puerto 3000")
});

app.get('/Grupo23',(req, res)=>{
    console.log ("ejecutó la app desde la raiz")
    res.send ("Bienvenido a la pagina pp de la app")
});

