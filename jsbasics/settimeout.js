console.log("A");
setImmediate(() => console.log("D set immediate")); // Executed next iteration
setTimeout(() => console.log("B set time out"));
setTimeout(() => console.log("C set time out"));
process.nextTick(() => console.log("E next tick")) // Executed immediately
setTimeout(() => console.log("F set time out"),200); // Executed next iteration
console.log("G");