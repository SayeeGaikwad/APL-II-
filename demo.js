var http=require('http');

listener=function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello world');
};
server=http.createServer(listener);
server.listen(4000);
console.log('Server running at http://127.0.0.1:4000/');