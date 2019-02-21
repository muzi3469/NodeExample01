var log = msg => console.log(msg);
var os = require('os');

log(os.hostname());
log(os.freemem());
log(os.totalmem());
console.dir(os.cpus());
console.dir(os.networkInterfaces());