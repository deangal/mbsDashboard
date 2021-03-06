//express
let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
const axios = require('axios')
let app = express()

let events = require('events')
let eventEmitter = new events.EventEmitter();


app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())


//post eventEmiter
var postBody = "";
var putBody = "";
var deleteBody = "";

app.post('/post',function(req,res) {
    postBody = req.body;
     eventEmitter.emit('onPost',JSON.stringify(req.body),' mbs')
     res.status(200).send('OK')


})

//put eventEmiter
app.post('/put',function(req,res) {
    putBody = req.body;
    eventEmitter.emit('onPut',JSON.stringify(req.body),' mbs')
    res.status(200).send('OK')


})

//delete eventEmiter
app.post('/delete',function(req,res) {
    deleteBody = req.body;
    eventEmitter.emit('onDelete',JSON.stringify(req.body),' mbs')
    res.status(200).send('OK')


})

app.get('/post',function(req,res) {
    
    res.send(postBody);
})

app.get('/put',function(req,res) {

    res.send(putBody);
})

app.get('/delete',function(req,res) {

    res.send(deleteBody);
})

 
app.listen(8000,()=>{
    console.log("The server is up");
})



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@z@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@z@

// websocket

const http = require("http");
const WebsocketServer = require("websocket").server


let connection = null; 
const httpServer = http.createServer((req, res) => {
    console.log("We have recived a req");
})

const wss = new WebsocketServer({
    "httpServer": httpServer
})


// on post send data to react
eventEmitter.on('onPost', function( data,domain ){
    console.log(data);
    console.log(domain);
    connection.send([data, domain, ' post'])  
})

// on put send data to react
eventEmitter.on('onPut', function( data, domain ){
    connection.send([data, domain, ' put'])  
})

// on delete send data to react
eventEmitter.on('onDelete', function( data, domain ){
    connection.send([data, domain, ' delete'])  
})

// all wss .on
wss.on("request", request => {
   connection =  request.accept(null, request.origin)
   connection.on("open", () => console.log("OPENED!"))
   connection.on("close", () => console.log("CLOSED!"))

   connection.on("message", message => {
       console.log(`Recived message ${message.utf8Data}`);
   })
})

httpServer.listen(8080, () => console.log("Listening on 8080"));




// test function
// function send(){
//     connection.send(`Message ${Math.random()}`)

//     setTimeout(send,5000);
// }