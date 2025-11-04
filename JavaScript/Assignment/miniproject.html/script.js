 
 
 let URL ="https://playground.mockoon.com/customers";
 let URL2="https://playground.mockoon.com/photos";
//   const get = async()=>{
//     const res= await fetch(URL);
//     return res.json()
    

//   }
// const res = await fetch(URL)
//     .then(res => res.json())
//     .then(data => data) 

let dataGlobal
const coutmerData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  dataGlobal = data;
  return data;
};

let fun=async () => {
  await coutmerData();
  console.log(dataGlobal);
}
fun();
let dataGlobal2
const coutmerImage = async () => {
  const res = await fetch(URL2);
  const data = await res.json();
  dataGlobal2 = data;
  return data;
};

cument.getElementById("button").addEventListener("click", async () => {
  await customerData();
  displayCustomerData();
});

let funs=async () => {
  await coutmerImage();
  console.log(dataGlobal2);
}
funs();



