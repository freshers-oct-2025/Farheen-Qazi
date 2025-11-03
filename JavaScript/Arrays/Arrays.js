// we have add remove method like push() pop() unshift(),shift()
// push add at end pop remove at end
const fruits = ["Apple", "Banana"];
fruits.push("Mango");     // ["Apple","Banana","Mango"]
fruits.pop();             // ["Apple"]


// unshift /add to strt and shift reomve to START
fruits.unshift("Mango");     // ["Apple","Banana","Mango"]
fruits.shift();   
//  Extract / Insert / Delete Any Position
// slice= Extract part not modify orignal  ,splice= add/remove items(modify orignal)
// slice(start, end)
const nums = [10,20,30,40,50];
nums.slice(1,3);  // [20,30]
// splice(start, deleteCount, items...)
nums.splice(2, 1 ); // [10,20,40,50] remove 30
nums(3,1,34);
console.log(nums);
// sEARCH & check
// | Method          | Use                               |
// | --------------- | --------------------------------- |
// | `indexOf()`     | Find index of value               |
// | `lastIndexOf()` | Find last matching index          |
// | `includes()`    | Boolean check                     |
// | `find()`        | Finds first match (returns value) |
// | `findIndex()`   | Finds index of first match        |
const num = [1,2,3,4];
num.includes(3); // true
num.find(n => n > 2); // 3
// Sorting & Reversing
// Method	Action
// sort()	Sort array (string by default)
// reverse()	Reverse array

// Joining & Converting
// join()	Convert to string
// toString()	Convert array to string

// Combine / Copy Arrays
// concat()	Merge arrays
console.log(fruite.concat(num))
// Spread ...	Copy/Merge easily
const fruite=["orange","Apple"]
const all=[...fruite,...num]
console.log(all);


// Array Checking
Array.isArray()
// Check if variable is array retun boolean
// Array.isArray()
// Check if variable is array
Array.isArray(num)
// Fill & From
let mesg= new Array(3).fill("hi")
// new Array(3).fill("Hi"); // ["Hi","Hi","Hi"]
console.log(Array.from(mesg));


// Array.from("ABC"); // ["A","B","C"]
// Flatten Arrays
[1, [2,3], [4,[5]]].flat(2); // [1,2,3,4,5]
// flattern Array
// A Flatten Array means converting a nested array (array inside another array) into a single-level array.
const nestedArr = [1, 2, [3, 4], [5, [6, 7]]];
const flatArr = nestedArr.flat(2); // 2 = depth level
nestedArr.flat(Infinity);

console.log(flatArr);

// | Feature                  | `map()`                             | `forEach()`                   |
// | ------------------------ | ----------------------------------- | ----------------------------- |
// | Return value             | ✅ Returns a new array               | ❌ Returns **undefined**       |
// | Can chain methods?       | ✅ Yes (`map().filter()...`)         | ❌ Cannot chain directly       |
// | Purpose                  | Transform data and create new array | Only loop to do some action   |
// | Modifies original array? | ❌ No                                | ❌ No (but you *can* manually) |
// | Use case                 | If you need output                  | If you don't need output      |

// MAp transfer the data and create new object
const game=["circket","bootball"];
const double=game.map(g=> g.toUpperCase());
console.log(double);


const games = ["cricket", "football"];
// used to filter (select) item based on condition return new array
const onlyLower = games.filter(g => g === g.toLowerCase());
console.log(onlyLower); // ["cricket", "football"]

// reduce() is used to convert an array to a single value

// flateMap