const http = require('http')

const server = http.createServer()

const io = require('socket.io')(server, {
    cors: { origin: "*" }
})

let usuarios = []

io.on('connection', (socket) => {

    socket.on('connected', (data) => {
        usuarios.push(data.user)
        console.log(usuarios)
        io.emit('connected', {user: data.user, users: usuarios})
    })

    socket.on('disconected', (data) => {
        usuarios = usuarios.filter((user) => user !== data.user)
        console.log(usuarios)
        io.emit('disconected', {user: data.user, users: usuarios})
    })

    socket.on('chat_message', (data) => {
        io.emit('chat_message', data)
    })

    return () => {socket.off('connected')}
})

server.listen(3001);