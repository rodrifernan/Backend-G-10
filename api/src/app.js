const express = require('express');
const cookieParser = require('cookie-parser');
//const express = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { loginVerification } = require('./middlewares/login')

require('./db.js');
const notifications = require('./utils/notifications')

const server = express();
const http = require('http').Server(server);
const socketUtils = require('./utils/socketUtils')
const io =  socketUtils.sio(http);
socketUtils.connection(io);


 const socketIOMiddleware = (req, res, next) => {
  req.io = io;
  next();
};

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, auth-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

server.use('/api', routes);


server.post("/notifications", async (req, res, next) => {

  try {
    const { name } = req.body;
    const response = await notifications[name]()

    io.emit(name, response)
    res.send({response})
  } catch (error) {
    next(error);
  }
  // io.emit("usersQuantity", Math.floor((Math.random() * (100 - 50 + 1)) + 50));

});

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = http;
