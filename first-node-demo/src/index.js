const http = require('http'); 
const port = 3000;
const handler = (request, response) => {
    console.log('Request!');

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('yo whatup fam');
    response.end();
};

http.createServer(handler).listen(port, () => {
    console.log(`server started on port ${port}`);
})