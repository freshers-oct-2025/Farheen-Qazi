const { Max } = require("class-validator");

function greet(name){
console.log("hello"+name);
}
function process(callbackfun){
    let user="farheen";
    callbackfun(user);

}
process(greet);
// console.log(process(greet));

// basically call back function is pass as an parameter to another funtion and executed later when a task is completed
// it give prblem callbback nested nested  hell to resolve this we are async await



const games = ["cricket", "football"];

const onlyLower = games.filter(g => g === g.toLowerCase());
console.log(onlyLower); // ["cricket", "football"]
