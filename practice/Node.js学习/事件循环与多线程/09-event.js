var EventEmitter = require("events").EventEmitter;

class App extends EventEmitter {}
var app = new App();

app.on("start", () => {
  // 订阅
  console.log("start");
});

app.emit("start"); // 触发
console.log("aaaa");
