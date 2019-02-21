const log = msg => console.log(msg);

var fs = require('fs');

fs.open('./output.txt', 'w', (err,fd)=>{
   if(err) throw err;
    
    var buf = new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err) throw err;
        
        log(err, written, buffer);
        
        fs.close(fd, () => {
            log("완료...");
        });
    });
});