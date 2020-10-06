const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("I am using node js");
    }else if(req.url=="/home"){
        res.end("This is my home page");
    }else{
        res.writeHead(404,{"context-type": "text/html"});
        res.end("<h1>404 Error</h1>");
    }
});


server.listen(8000);