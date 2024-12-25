const http = require('http');
const { isPortTaken } = require('./utils'); //Helper function to check port availability

async function startServer(port) {
  if (await isPortTaken(port)) {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1); //Exit with an error code
  }

  const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  };

  const server = http.createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

const port = 8080; //Or use process.env.PORT for environment variables
startServer(port);

//utils.js
const net = require('net');

async function isPortTaken(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .once('listening', () => tester.close())
      .listen(port);
  });
}
module.exports = { isPortTaken };