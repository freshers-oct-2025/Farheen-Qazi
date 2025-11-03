function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(" data is created",dataId);
           resolve("updated")
            
        },300)
    })
}
(async function  (params)
 {
    console.log("data 1 pass");
    
  await getData(1);
  console.log("data 2 is pass");
  
  await getData(2);  
})();
// 
// TO AVOID TO CREATE FUNCTION AGAIN AND AGAIN USE iifE
//  ()=>{}();
// TO AVOID PILLING GOLBAL NAME SPACE