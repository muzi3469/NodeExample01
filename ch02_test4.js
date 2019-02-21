const log = message => console.log(message);

var calc = {};
calc.add = function(a,b){
    return a+b;
}

log(calc.add(10,24));

var tmpLog = require('./chLog');
tmpLog.log("Hello");