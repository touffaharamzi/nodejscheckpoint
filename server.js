const http = require('http');
const server = http.createServer((req,res)=>{
res.write('<h1>hello NODE !!!!</h1>')
res.end();
});
server.listen(3000, (err)=>{
    if(err) console.log(err)
    else console.log('server connected')
});