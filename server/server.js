const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})


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



const PORT = 3001
server.listen(PORT, () => console.log('Server runing....'))