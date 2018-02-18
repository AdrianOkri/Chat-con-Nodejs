const io = require('socket.io') //"Importamos" socket.io para hacer la conxión del chat

module.exports = function (server) {
	var sockets = io.listen(server) //Socket.io escuchará por el puerto del servidor
	// Cuando alguien se conecte, vamos a recibir un socket
	sockets.on('connection', function(socket) {
	console.log('Nuevo cliente conectado') // Mostrar mensaje en consola, no del navegador, sino del propio servidor de node

	socket.on('mensaje-del-cliente', function (data) {
		sockets.emit('mensaje-del-servidor', data) // Envíar un evento desde el servidor, emitir a todos los usuaros
	})
})
}