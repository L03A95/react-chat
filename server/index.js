const http = require('http')

const server = http.createServer()

const io = require('socket.io')(server, {
    cors: { origin: "*" }
})

io.on('connection', (socket) => {

    socket.on('connected', (data) => {
        console.log('Se ha conectado ' + data.user)
    })
    socket.on('chat_message', (data) => {
        io.emit('chat_message', data)
    })
})

server.listen(3001);