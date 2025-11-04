// Promises
// Promises is for eventual completion of task .it is an object in js
// it is solution to callback hell
// promise is an object in javaScript and it has three state 
// pending ,fullfirld, and rejected,
// we have two handlers relve and rejectred
// with the help of this we can resolve and get the result or we can generate and error
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            // resolve("success");
            reject("error")
            if (getNextData) {
                getNextData();
            }
        }, 3000);
    });
}
let finaval=getData(123);
console.log(finaval);

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
})


let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Opreation is success");
    }else{
        rejecte("Operation is fail")
    }
});
myPromise.then(result=> console.log(result));
myPromise.catch(error =>console.log(error)
);