import { Server } from "socket.io";
import cors from 'cors'

cors()
const io = new Server({
    cors: {
        origin: 'http://localhost:3000'
    }
}, []);


let OnlinUser = []


const addNewUser = (username, socketId) => {

    !OnlinUser.some(user => user.username === username) && OnlinUser.push({ username, socketId })

}
const removeUser = (socketId) => {
    OnlinUser = OnlinUser.filter(user => user.socketId !== socketId)
}
const getUser = (username) => {
    return OnlinUser.find(user => user.username === username)
}



io.on("connection", (socket) => {
    
    socket.on('newUser', (username) => {
        addNewUser(username, socket.id)
        console.log(username,socket.id)
    })
    socket.on('liked',(data)=>{
        console.log(data.receiver+' `s post liked by '+ data.sender)
        
    })
    socket.on('commented',(data)=>{
        console.log(data.sender + " commented on your Post .")
    })
    socket.on('shared',(data)=>{
        console.log(data.sender+" shared your Post")
    })
    socket.on('disconnect', () => {
        console.log('someone disconnected')
        removeUser(socket.id)
    })
});

io.listen(5000);

