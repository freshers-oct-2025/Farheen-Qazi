console.log("A")
setTimeout(()=>{
    console.log("B");
},2000);
console.log("c");

// setTimeout callback function ko leta hai
// Callback hell Nested callback stacks below one another forming a pyraide structure (pyramide od dom)
// this Style of programing becomes difficult to understand & manage