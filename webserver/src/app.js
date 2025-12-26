// server-node.js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('hello this is my first time using express\n is still dosnet used to it so i am using https modules for this.\n Wish me luck');
    res.end(`
        <h1>Hello from raw Node!</h1>
  <p>This is a paragraph</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
`);
  } else {
    res.writeHead(404).end('Not Found');
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));