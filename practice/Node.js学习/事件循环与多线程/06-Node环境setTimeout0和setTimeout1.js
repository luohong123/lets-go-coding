const fs = require("fs");
const path = require('path');
fs.readFile(path.resolve(__dirname, "test.txt"), "utf8", function(err, data) {
  setTimeout(() => {
    console.log("setTimeout4");
  }, 4);
  setTimeout(() => {
    console.log("setTimeout1");
  }, 1);
  setTimeout(() => {
    console.log("setTimeout0");
  }, 0);
  setTimeout(() => {
    console.log("setTimeout1第二个");
  }, 1);
});
// setTimeout(() => {
//   console.log("setTimeout4");
// }, 4);
// setTimeout(() => {
//   console.log("setTimeout1");
// }, 1);

// setTimeout(() => {
//   console.log("setTimeout0");
// }, 0);
// setTimeout(() => {
//   console.log("setTimeout1第二个");
// }, 1);
