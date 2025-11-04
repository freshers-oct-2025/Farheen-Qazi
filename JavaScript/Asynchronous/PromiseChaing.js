function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("1️Order Placed ✅"), 1000);
    });
}

function cookFood() {
    return new Promise((reject) => {
        setTimeout(() => reject("stove is not working"), 1500);
    });
}

function deliverFood() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("process complte"), 1000);
    });
}

orderFood()
  .then((msg) => {
    console.log(msg);
    return cookFood(); // return next promise
  })
  .then((msg) => {
    console.log(msg);
    return deliverFood();
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error ", err))
  .finally(() => console.log("Process Complete"));
