const log = message => console.log(message);

function add(a,b, callback){
    let result = a + b;
    callback(result);
    
    let count = 0;
    let history = function(){
        count++;
        return count + " :: " + a + " + " + b + " = " + result;
    };
    
    return history;
}

var add_history = add(10,20, function(result){
    log("파라미터로 전달되 콜백 함수 호출됨.");
    log(result);
});

var add_history2 = add(10,202, function(result){
    log("파라미터로 전달되 콜백 함수 호출됨.");
    log(result);
});

log("결과 값으로 받은 함수 실행 결과 : " + add_history());
log("결과 값으로 받은 함수 실행 결과 : " + add_history());
log("결과 값으로 받은 함수 실행 결과 : " + add_history());
log("결과 값으로 받은 함수 실행 결과 : " + add_history2());