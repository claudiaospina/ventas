const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');


const app = express();

//Importar rutas
const ventasRoutes = require('./routes/ventas');
const { urlencoded } = require('express');



//Configurando express
app.set('port', process.env.PORT || 3002)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(morgan('dev')); // ver peticiones de la ruta
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'textiles_la_15'
}, 'single'))
app.use(express.urlencoded({extend: false})) //método para entender los datos del formulario, es false porque no hay imágenes


//Rutas
app.use('/', ventasRoutes) //Cuando alguien ingrese a la página consuma las rutas creadas en ventas.js


//Archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')))


//Servidor corriendo
app.listen(app.get('port'), () => {
    console.log("Server running on port 3002");
});

