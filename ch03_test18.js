const log = msg => console.log(msg);

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = speed => console.log(speed + "km 속도로 걸어갑니다.");
Person.prototype.firstName = "최";

var p1 = new Person("소녀시대", 20);
var p2 = new Person("레드벨벳", 21);

p1.firstName = "이";

log(p2.firstName);
log(p2.);