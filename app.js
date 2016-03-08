var http = require('http');
var balance = require('./exportData.js');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(balance.message() + balance.myBalance()+"\n");
  res.end();
}).listen(8000);
