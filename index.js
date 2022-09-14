const express = require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const userRoute =require("./routes/user");

const app = express();
app.set('PORT',process.env.PORT || 3000);

app.use(express.json());
app.use('/api',userRoute);

//rutas
app.get('/',(req,res)=>{
    res.send("API");
});

app.get('/hola',(req,res)=>{
    res.send("<h1>Holaa API</h1>");
});




//mongodb conexion
mongoose
    //.connect(process.env.MONGODB_URI)
    .connect()
    .then(()=> console.log('conectado a la base de datos'))
    .catch((error) => console.error(error)); 

app.listen(app.get('PORT'),()=> { 
console.log('Servidor funcionando en el puerto',app.get('PORT'))
 });