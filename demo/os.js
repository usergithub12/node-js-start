const os = require("os");

console.log("OS: ", os.platform());

console.log("Processor : ", os.arch());

console.log("Processor details : ", os.cpus());

console.log("Free Memory  : ", os.freemem());
console.log("Total Memory  : ", os.totalmem());

console.log("Home dir  : ", os.homedir());

console.log("Time up  : ", os.uptime());
