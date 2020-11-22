var socket = io();
// escuchar sucesos
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
// escuchar sucesos
socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});
// enviar información
socket.emit('enviarMensaje', {
    usuario:'Joan',
    mensaje: 'Hola Mundo'
}, function(res){
    console.log('respuesta server:',res);
});
// escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:',mensaje);
});
