setTimeout(()=>{
  console.log('timeout1');
})
process.nextTick(()=>{
  console.log('process.nextTick');
})

console.log('log1');