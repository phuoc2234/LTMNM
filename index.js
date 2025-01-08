const http = require("node:http");

let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1> hello server NodeJS</h1>");
});

server.listen(3000, () =>{
    console.log("server started!!!");
});
