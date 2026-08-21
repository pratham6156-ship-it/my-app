const http = require('http');
const server = http.createserver((req,res) =>{
  res.end('Hello from EC2!');
});
server.listen(3000);
