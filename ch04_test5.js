const log = msg => console.log(msg);

var fs = require('fs');

//파일을 동기식 IO로 읽어 들입니다.
//var data = fs.readFileSync('./package.json', 'utf8');
//
//log(data);

//파일을 비동기식 IO로 읽어 들입니다.
fs.readFile('./package.json', 'utf8', function(err, data){
    log(data);
});

log('프로젝트 폴더 안의 파일을 읽도록 요청했습니다.');