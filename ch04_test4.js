const log = msg => console.log(msg);

var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');

log(Calc.title + "에 stop 이벤트 전달함.");