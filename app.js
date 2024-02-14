const http = require('http');
const fs = require('fs');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading messages:", err);
        return;
    }
    messages = data.split('\n').filter(Boolean);
});

http.createServer(function(req, res) {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Messages:</h1>');
    res.write('<ul>');
    messages.forEach(message => {
        res.write('<li>' + message + '</li>');
    });
    res.write('</ul>');

    res.write('<h1>Welcome to my page</h1>');
    res.write('<form method="POST" action="/message">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}).listen(9010);


/*
1)Internet is computers interconnected worldwide. It follows some rules(protocols) in which IP (Internet protocol) being most fundamental protocol to communicate bewtween devices.



2)HTTP,FS,PATH , EVENTS

3)HTTP:This module allows transfer of data between node.js and computer throught hyper text transfer protocol.

   FS: File system allows node.js to interact with file systems on the computer its running.

	PATH : It allows to manipulate with the files.

	EVENTS : It helps in creating custome events and event listeners in node.js




*/