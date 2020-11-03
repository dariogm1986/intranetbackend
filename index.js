//importaciones
require('dotenv').config();  //Para leer las variables de entorno
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crea el seridor de express
const app = express();

//Configurar Cors
app.use(cors());

//Conexion a la BD
dbConnection();




app.listen( process.env.PORT, ()=> {
    console.log("Servidor corriendo satisfactoriamente en puerto " + process.env.PORT);
});