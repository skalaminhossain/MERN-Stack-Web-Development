const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res) => {
    
    if(req.url === '/'){
        fs.readFile('home.html', (err , data) => {
            if(err){
                console.log("Something Wrong");
            }else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                res.end()
            }
        })
    }else if(req.url === '/about'){
        fs.readFile('about.html' , (err , data) => {
            if(err){
                console.log("Something wrong");
            }else{
                res.write(data)
                res.end()
            }
        })
    }else if(req.url === '/product'){
        fs.readFile('product.html' , (err , data) => {
            if(err){
                console.log('Something Wrong');
            }else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                res.end()
            }
        })
    }
})
const PORT = 4000;

server.listen(PORT)

console.log(`Server is running on port ${PORT}`);