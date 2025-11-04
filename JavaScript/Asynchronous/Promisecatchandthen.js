//  fullfill =>.then()
// erject=>.catch()

function getpromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let succsess = true
            if(!succsess)
            resolve ("order is completed")
        else{
            reject("call to cometer Care");
        }
        },3000)
    });
}
getpromise().then(msg=>console.log(msg)).catch(error=> console.log(error));
// if we want to fetch data one the second then we can do chaining