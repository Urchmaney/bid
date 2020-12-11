const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', () => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});