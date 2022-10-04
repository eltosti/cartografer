import { Server } from 'socket.io'


const webSocketServer = {
    name: 'webSocketServer',
    configureServer(server:any) {
        const io = new Server(server.httpServer)

        io.on('connection', (socket) => {
            socket.emit('eventFromServer', 'Hello, World 👋')
        })
    },
}

export {webSocketServer}
