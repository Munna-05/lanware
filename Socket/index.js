import { Server } from "socket.io";
import cors from 'cors'

cors()
const io = new Server({
    cors: {
        origin: 'http://localhost:3000'
    }
});
let OnlinUser = []
const addNewUser = (username,socketId)=>{

    !OnlinUser.some(user=>user.username === username) && OnlinUser.push({username,socketId})

}
const removeUser = (socketId)=>{
    OnlinUser = OnlinUser.filter(user=>user.socketId!==socketId)
}
const getUser =(username)=>{
    return OnlinUser.find(user=>user.username===username)
}

io.on("connection", (socket) => {
   
    console.log('connected')
    socket.on('newuser',(username)=>{
        addNewUser(username,socket.id)
        console.log(socket)
    })
    socket.on('sendNotification',({senderName,receiverName})=>{
        const receiver = receiverName
        io.to(receiver.socketId).emit('getNotification',{senderName})
    })
    socket.on('disconnect', () => {
        console.log('someone disconnected')
        removeUser(socket.id)
    })
});

io.listen(5000); 

