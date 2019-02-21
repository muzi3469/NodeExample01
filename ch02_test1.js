const log = message => console.log(message);

var Person = {
    name : "소녀시대",
    age : 20
};

log(Person);

process.argv.forEach(function(item, index){
   log(index + " : " + item); 
});

log(process.env['OS']);