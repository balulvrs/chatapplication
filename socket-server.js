const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 9898

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/socketclient.html")
})

io.on("connection", (client) => {
    console.log("Client connected");
    var data=''
    client.on('fromClient', function(msg){
        console.log('message: ' + msg);
        data = msg;
        client.emit("fromServer", data);
        client.broadcast.emit("fromServer","Broad cast message");
    });
    console.log("Data::" + data);
    client.on('username', (username) => {
        console.log(usrname)
    })
    
})

server.listen(PORT, () => {
    console.log("Socket server started at port .. " + PORT);
})