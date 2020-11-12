//importaciones
require('dotenv').config();  //Para leer las variables de entorno
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crea el seridor de express
const app = express();

//Configurar Cors
app.use(cors());

// Lectura y parseo del body (Middlewares)
app.use( express.json() );

//Conexion a la BD
dbConnection();

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/articulos', require('./routes/articulos'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/login', require('./routes/auth'));


app.listen( process.env.PORT, ()=> {
    console.log("Servidor corriendo satisfactoriamente en puerto " + process.env.PORT);
});