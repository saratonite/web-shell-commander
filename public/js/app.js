document.addEventListener('DOMContentLoaded',function(){


  var socket = io();
  var btn = document.getElementById('btnMy');
  var btnRemote = document.getElementById('btnRemote');

  btn.addEventListener('click',function(){
    socket.emit('shutdown:me',{'name':'Some Command'});
  });

  btnRemote.addEventListener('cleck',function(){
    socket.emit('shutdown:remote',{'ip':'','username':'','password':''});
  });

  socket.on('output',function(data){
    console.info('Server response');
    console.log(data);
  });

});
