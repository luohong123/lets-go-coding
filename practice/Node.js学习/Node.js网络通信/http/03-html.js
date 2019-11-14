const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  // 设置 utf8 解决中文乱码的问题
  res.setHeader("Content-Type", "text/html; charset=utf8");
  if (url === "/") {
    res.end(`
  <h1 style="color: pink;">hello</h1>
  <p>你好</p>
  `);
  } else if (url === "/a1") {
    fs.readFile("./index.html", function(err, data) {
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
