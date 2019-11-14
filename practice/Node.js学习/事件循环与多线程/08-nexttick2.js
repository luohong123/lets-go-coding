// 不在node的任何阶段执行，在poll check中间切换执行
const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname, "test.txt"), "utf8", () => {
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  setImmediate(() => {
    console.log("setImmediate");
    process.nextTick(() => {
      console.log("nextTick3");
    });
  });
  process.nextTick(() => {
    console.log("nextTick1");
  });
  process.nextTick(() => {
    console.log("nextTick2");
  });
});
// 1. nextTick1
// 2. nextTick2
// 3. setImmediate
// 4. nextTick3
// 5. setTimeout
