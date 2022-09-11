const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res) => {
    if(req.url == "/"){
        fs.readFile('home.html', (err , data) => {
            res.writeHead(200, {"Content-Type" : "text.html"})
            res.write(data)
            res.end()
        })
        //sync write file
    }else if(req.url == '/about'){
        fs.writeFile('hello.txt' , 'This is about page' , (err) => {
            if(err){
                res.writeHead(200, {"Content-Type":"text/html"})
                res.write("Something Wrong")
                res.end()
            }else{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write('This is about Page')
                res.end()
            }
           
        })
        //sync write file
    }else if(req.url == '/contact'){
        let err = fs.writeFileSync('sync.txt', 'Hello , this is contact page')
        if(err){
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write("Something Wrong")
            res.end()

        }else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write('This is contact Page')
            res.end()
        }
    }

})

server.listen(3000)
console.log("server is runnig");