const socketIO = require('socket.io');
//const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

//const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
socketConnection(server);
//app.use(express.static(publicPath));

//Cors Headers
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-auth');
  res.header('Access-Control-Expose-Headers', 'x-auth');
  next();
}

io.on('connection', function(socket) {
  app.post('/', function(req, res) {
    let message = req.body.message;
    io.emit('newMessage', message);
    res.send(console.log());
  });
}

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
