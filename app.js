const http = require('http')
const server =  http.createServer((req, res)=>{
   if (req.url === '/') {
       res.end('Home page')
   }
   if (req.url === '/about') {
    res.end('About page')
}
res.end('error page')
})

server.listen(4000, ()=>{
    console.log('server listning on port : 4000..');
})
