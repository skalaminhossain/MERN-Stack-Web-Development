// let http = require('http')

// let server = http.crateServer((req , res)=>{
//     res.end("Hello World")
// })

// server.listen(5500)

// console.log("server is running");

// var http = require('http');

// var server = http.createServer(function (req,res){
//     res.end("Hello world")
// })

// server.listen(5500);
// console.log("server is runnig");


// const http = require('http')

// const server = http.createServer((request , response)=>{
//     response.end("Hello world")

// })

// server.listen(5000)
// console.log("server is running");

const http = require('http')

const server = http.createServer((request , response) => {
        if(request.url == "/"){
            response.writeHead(200, {"Content-Type" : "text/html"})
            response.write("<H1>This is Home Page</h1>")
            response.end()
        }
        else if(request.url == "/shop"){
            response.writeHead(200, {"Content-Type" : "text/html"})
            response.write("<h1> This is shop Page </h1>")
            response.end()
        }
        else if(request.url == "/contact"){
            response.writeHead(200, {"Content-Type" : "text/html"})
            response.write("<p>This is contact Page</p>")
            response.end()
        }
})

server.listen(4000)
console.log("Server is runnig");