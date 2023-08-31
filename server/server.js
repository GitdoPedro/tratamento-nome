const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const NameModel = require('./models/nameModel');
const nameRoutes = require('./config/routes'); 

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } });

app.use(bodyParser.json());

const PORT = 3001;

io.on('connection', socket =>{

    socket.on('set_Nome_Completo', nome  =>{
        const nomeCompleto = 'Sr(ª) ' + capitalizeWords(nome)
        
        io.emit('nome_recebido',{
            nomeId: socket.id,
            nomeCompleto
        })
    })
})

const capitalizeWords = inputString =>
  inputString
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');



    const Name = NameModel(sequelize, sequelize.Sequelize.DataTypes);
    sequelize.sync().then(() => {
       app.use('/api/name', nameRoutes);
      server.listen(PORT, () => console.log('Server running....'));
    }).catch((error) => {
      console.error('Error initializing the database:', error);
    });