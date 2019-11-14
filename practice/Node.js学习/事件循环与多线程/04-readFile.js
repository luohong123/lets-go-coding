var fs = require("fs");
var path = require("path");

console.time("file");
fs.readFile(path.resolve(__dirname, "test.txt"), "utf8", function(err, data) {
  console.timeEnd("file");
});
