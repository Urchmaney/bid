const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://127.0.0.1:5501',
    methods: ['GET', 'POST'],
  },
});
// const connectMongoBD = require('./src/services/connect');

io.on('connection', socket => {
  socket.on('greetings', (d1, d2, d3) => {
    console.log(d1, d2, d3);
  });
});

const startApplication = async () => http;

module.exports = startApplication;
