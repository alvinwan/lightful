const express = require("express");
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

/**
 * Run application on port 3000
 */

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:', port);
});

/**
 * Maintain player IDs
 */

var playerIds = [];
var smallestPlayerId = 1;

function getPlayerId() {
  var playerId = smallestPlayerId;
  playerIds.push(playerId);

  while (playerIds.includes(smallestPlayerId)) {
    smallestPlayerId++;
  }
  return playerId;
}

function removePlayer(playerId) {
  if (playerId < smallestPlayerId) {
    smallestPlayerId = playerId;
  }
  var index = playerIds.indexOf(playerId);
  playerIds.splice(index, 1);
}

/**
 * Handle socket interactions
 */

io.on('connection', function(socket) {
  socket.on('newPlayer', function() {
    socket.playerId = getPlayerId();
    console.log("new player: ", socket.playerId);
    socket.emit('playerId', socket.playerId);
  });

  socket.on('disconnect', function() {
    if (socket.playerId === undefined) return;
    console.log("disconnected player: ", socket.playerId);
    removePlayer(socket.playerId);
  });
});
