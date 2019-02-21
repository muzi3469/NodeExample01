process.on('tick', function(count){
   console.log("tick event !! -> " + count); 
});

setTimeout(function(){
    console.log("2초후 tick 이베트 시도..");
    
    process.emit('tick', 4);
}, 2000);