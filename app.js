const http = require('http') // Para conectar nuestro chat por el modulo de npm http
const express = require('express') //"Importamos" express

const app = express() //Ejecutar express
const server = http.createServer(app) //Crear el servidor de http, y pasar todo lo que tenga app
// Configuración del servidor
app.set('port', 3000) // Asignar a port el valor de 3000 que será nuestro puerto de conexión
//__dirname devuelve la ruta actual del archivo
app.use(express.static(__dirname + "/public")) //Entrar a la carpeta public
//La apliación será escuchada por el puerto 3000, y enviará un mensaje de inicio por consola
server.listen(app.get('port'), function () {
	console.log('El server ha iniciado')
})
// Este es la lógica de los sockets
require('./sockets')(server)