let http = require('http');
let url =require("url");
let mydt = require('./lib/datetime');

const server= http.createServer((req,res)=>{
    res.writeHead(200);
    res.write(url.parse(req.url).query);
    res.end();
})
.listen(5000,"127.0.0.1",100,()=>{

    console.log("server started");
});