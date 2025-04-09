const express = require('express')
const path = require('node:path')
const mysql = require('mysql2');
const app = express()
c
const { PORT } = require('./config.js');
const { clave_sesion } = require('./config.js');
// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// !!!! Contraseña para ingresar "tecnica1"
// Configuración de express-session
app.use(
    session({
        secret: clave_sesion,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 30 * 60 * 1000, // 30 minutos en milisegundos 
        },
    })
);




app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// Middleware para procesar JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/resources', express.static(path.join(__dirname, '../Client/Resources')));

// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'timbre',
    port: 3306
});

// Encender servidor
app.listen(PORT, () => {
    console.log(`PAGINA: localhost: ${PORT}`)
})