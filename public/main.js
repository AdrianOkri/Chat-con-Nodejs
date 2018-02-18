$(function () { //Jquery
	//socket iniciado
	var socket = io()
	// Variables
	var message = $('#chat-message') //Obtener el valor del input type=text y asignarle una variable
	var chat = $('#chat') // Obtener el valor del div id=chat y guardar en variale

	message.focus() // .focus() fija el enfoque del cursor en el elemento especificado

	$('#message-box').submit(function(ev) { //obtenemos el formulario - message-box -
		ev.preventDefault() //Cancelar el refresh de la página

		socket.emit('mensaje-del-cliente', message.val())
		message.val('') //Limpiar mensaje del input
	})
	// Escuchar el evento del servidor
	socket.on('mensaje-del-servidor', function (data) {
		chat.append(data + "<br/>") // Mostrar en el chat el mensaje que contiene data
	})
})