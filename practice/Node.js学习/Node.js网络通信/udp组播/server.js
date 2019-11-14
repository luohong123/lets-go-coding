const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("listening", () => {
  const address = server.address();
  setInterval(function() {
    server.send("hello", 8000,'224.0.1.100');
  }, 2000);
});

server.on("message", (msg, remoteInfo) => {
  console.log(
    `server got ${msg} from ${remoteInfo.address}: ${remoteInfo.port}`
  );
  server.send("world", remoteInfo.port, remoteInfo.address);
});

server.on("error", err => {
  console.log("server error", err);
});

server.bind(3000);
