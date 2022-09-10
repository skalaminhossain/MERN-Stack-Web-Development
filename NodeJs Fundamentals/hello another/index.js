const http = require("http")

const server = http.createServer((request , response) => {
    if(request.url == "/"){
        response.write("<h1> This is Home page </h1>")
        response.end()
    }

})

server.listen(4400)
console.log("server is rnning");