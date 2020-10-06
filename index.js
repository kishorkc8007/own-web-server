const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("We can create our own web server using node js");
});


server.listen(8000);