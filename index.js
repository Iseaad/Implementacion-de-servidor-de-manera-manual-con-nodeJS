const express=require ("express");  //se importa modulo express y se guarda en la variable 
const mongoose=require ("mongoose"); //importacion modulo mongoose
const Deporte = require("./modelos/deporte");
const deporte=require ('./modelos/deporte'); //importacion de modelo deporte

const app = new express (); //instanciando o inicializando objeto tipo express  
const router=express.Router();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//----------------conexiòn a la base de datos en mongodb atlas-------------------------//
mongoose.connect("mongodb+srv://Grupo23:Grupo23@clustergrupo23.gvrtivl.mongodb.net/Grupo23?retryWrites=true&w=majority");

//---------------CRUD HACIA LA BD-------------------//
router.get('/',(req,res)=>{
    console.log("Accediendo a la raiz")
    res.send("Bienvenido a mi primera API")
});

router.post ('/creandoReporte', (req,res)=>{
    let nuevoDeporte = new Deporte({
        nombre: req.body.nombre,
        numeroJugadores: req.body.jugadores,
        pais: req.body.pais
    });
});

app.use(router);
app.listen (3000,()=>{  // si la aplicacion se conecta por el puerto 3000 ejecutará la function solicitada
console.log ("Servidor ejecutandose por el puerto 3000")
});

app.get('/Grupo23',(req, res)=>{
    console.log ("ejecutó la app desde la raiz")
    res.send ("Bienvenido a la pagina pp de la app")
});

