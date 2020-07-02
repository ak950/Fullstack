var http=require('http');
var dt=require('./test');
http.createServer(function(req,res){
res.writeHead(200,{'content-Type':'text/html'});
res.write(dt.myDateTime());
res.end();}).listen(8080);