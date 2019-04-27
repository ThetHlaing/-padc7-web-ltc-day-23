const http = require('http');
const fs = require('fs');

http.createServer( (req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,"{Content-type : text/html}");
        const readStream = fs.createReadStream('./static/index.html');
        readStream.pipe(res);
    }
    else if(req.url === '/image'){
        res.writeHead(200,"{Content-type : image/jpeg}");
        const readStream = fs.createReadStream('./static/gicon.jpeg');
        readStream.pipe(res);
    }
    else if(req.url === '/json'){
        res.writeHead(200,"{Content-type : application/json}");
        const readStream = fs.createReadStream('./static/temp.json');
        readStream.pipe(res);
    }
    

}).listen(8090);


//Status Codes -  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//HTTP Types - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types