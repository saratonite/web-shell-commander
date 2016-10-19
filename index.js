var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var spawn = require( 'child_process' ).spawn;

app.use('/assets',express.static('public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');

  // Shutdown me
  socket.on('shutdown:me',function(data){
    console.log(data);
    // Exec
    var ls = spawn( 'shutdown', ['/s','/f'] );

    ls.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
    var outputScreen = `stdout: ${data}`;
    socket.emit('output',{result:outputScreen});
    });

  });

  // Shutdown remote system

  socket.on('shutdown:remote',function(data){

    console.log(data);

  });

});


http.listen(8000, function(){
  console.log('listening on *:8000');
});
