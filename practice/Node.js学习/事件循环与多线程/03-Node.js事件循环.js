// 和浏览器的事件循环完全不一样，浏览器的事件循环是宏任务微任务
console.log(__dirname,'__dirname'); // 所在文件夹的绝对路径
console.log(__filename,'__filename');
setTimeout(()=>{
  console.log('setTimeout1');
},1)
setTimeout(()=>{
  console.log('setTimeout0');
},0)
// 1. setTimeout1  2. setTimeout0
setImmediate(()=>{
  console.log('setImmediate');
},0);

console.log('bbb');