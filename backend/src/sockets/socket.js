import {Server} from "socket.io";
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

const users={};

function setupSocket(server){

    const io=new Server(server,{})

    io.use((socket,next)=>{
        const cookies=socket.request.headers.cookie;
        const {token}=cookie.parse(cookies || '');

        if(!token){
            return next(new Error("Unauthorized"));
        }

        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            socket.user=decoded;
            next();
        }catch(error){
            return next(new Error("Unauthorized"));
        }

    })


    io.on('connection',(socket)=>{

        users[socket.user._id]=socket.id;
        console.log(users);
        
        socket.on('disconnect',()=>{
            console.log("a user disconnected");  
        })

        socket.on("message",(msg)=>{
            const {receiver  /* mongodb id  */, message}=msg;
            socket.to(users[receiver]).emit("message",msg);
            console.log(msg);
        })
    })
}

export default setupSocket;