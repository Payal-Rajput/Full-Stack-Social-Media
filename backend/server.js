import { log } from "console";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect",()=>{
        console.log("A user disconnected");
    })

    socket.on("normal",()=>{
        console.log("this is a normal message");
        
    })

    socket.emit("servermsg", "this is a server message");

    setTimeout(() => {
        socket.emit("kuch-randome", {})
    }, 1000)

    
  // ...
});

connectDB();

httpServer.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

