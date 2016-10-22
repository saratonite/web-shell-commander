
document.addEventListener('DOMContentLoaded',function(){


  var socket = io();
  var btn = document.getElementById('btnMy');
  var btnRemote = document.getElementById('btnRemote');

  var commnadButton = document.querySelectorAll('.command-btn');

  var webOutput = document.getElementById('webOutput');
  var clearOutput = document.getElementById('clearOutput');

  btn.addEventListener('click',function(){
    socket.emit('command:run',{'command':'shutdown'});
  });

  clearOutput.addEventListener('click',function(){
    webOutput.innerHTML = '';
  });

  // btnRemote.addEventListener('cleck',function(){
  //   socket.emit('shutdown:remote',{'ip':'','username':'','password':''});
  // });

  console.log(commnadButton);

  if(commnadButton.length){
    commnadButton.forEach(function(cmdbtn){

      cmdbtn.addEventListener('click',function(e){
          var commandName = e.target.getAttribute('data-command') ;
          if(commandName){
            socket.emit('command:run',{'command':commandName});
          }

      });

    });
  }


  socket.on('output',function(data){
    console.info('Server response');
    console.log(data);
    webOutput.innerHTML = webOutput.innerHTML+JSON.stringify(data.result)+'<br>';
  });

});
