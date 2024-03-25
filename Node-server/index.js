const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'application/json',

    })
    res.end(JSON.stringify({'id':1,
'name':'karthika'
}));
});
server.listen(5000,()=>{
    console.log(`listening on port 5000`)
});