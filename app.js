var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);
var io = require('socket.io')(httpServer);

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM3', {
  baudRate: 19200
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('data', function(data){
  switch (data) {
    case 'A':
      // io.emit('start');
      console.log("A");
      break;
    case 'B':
      // io.emit('stop');
      console.log("B");
      break;
    case 'TESTE':
      console.log("TESTE");
      break;
  
    default:
      break;
  }
});

io.on('connection', function(tecla) {

  tecla.on('text',function(text){
    io.emit('text',text);
  });

  tecla.on('start',function(){
    io.emit('start');
  });

  tecla.on('stop',function(){
    io.emit('stop');
  });
  
  tecla.on('mais',function(){
    console.log("mais");
    io.emit('mais');
  });
  
  tecla.on('menos',function(){
    console.log("menos");
    io.emit('menos');
  });

});

app.use(express.static(__dirname + '/node_modules'));
app.use("/javas", express.static('./javas/'));

app.get('/', function(req, res,next) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/tele', function(req, res,next) {
    res.sendFile(__dirname + '/tele.html');
});

httpServer.listen(8000,'192.168.20.103');




