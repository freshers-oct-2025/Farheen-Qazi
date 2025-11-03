
// using for Arrays
const number =[5,10,15,20];
for (let num of number){
    console.log(num);
}
// using for Object
const person={
name :"farheen",
age:24,
city:"pune"

};
// using for in 
for(let p in person){
    // console.log( p+person[p], "this for in loop");
    // console.log(person);
    
}
// forEachLoop()
const nums = [10, 20, 30];

nums.forEach((num, index) => {
  console.log(index, num);
});

const{name:UserName,age,city}=person;
console.log(UserName)
// console.log(name); after changing the key name and you want to acces perivious one then it gives you error Object annoymous
// console.log(person.name);
// default value default value assingn to only contry variable not to object so we get out name age city only 
const{contry="India"}=person;
console.log(person);
// if you want assign those value to object then
person.contry=contry;
console.log(person);
const user = {
  id: 101,
  address: {
    ct: "Mumbai",
    pincode: 400001
  }
};

const { address: { ct, pincode } } = user;

console.log(ct, pincode);
// destructuring in function parameter
function showUser({ name, age }) {
  details=name+age;
  console.log(details)
}
showUser(person); // Farheen 24
const{...others}=person;
console.log(person);




