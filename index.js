const express = require ('express');
const http = require('http');
const {Server} = require("socket.io")
// import path from 'path'; You cannot use import statement outside a module
const path = require('path');
const app=express();
const server = http.createServer(app)
const io = new Server(server);
io.on('connection',(socket)=>{
    console.log("A new user connected ", socket.id)
})
app.use(express.static(path.resolve("./public")))

app.get('/',(req,res)=>{
    res.sendFile("./public/index.html")
})
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>')
// })
server.listen(9000,()=>console.log(`server started at port 9000`))

