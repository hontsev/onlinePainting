var http = require("http");

http.createServer(function(request, response)
{
    response.writeHead(200, 
    {
        "Content-Type": "text/plain"
    });
    response.write("Hello World\n");
    response.end();
}).listen(8000, '127.0.0.1');
console.log('HTTP Server running at http://127.0.0.1:8000/');
