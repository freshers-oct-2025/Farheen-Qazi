 
 let URL = "https://playground.mockoon.com/customers";
let URL2 = "https://playground.mockoon.com/photos";

document.getElementById("button").addEventListener("click", loadData);
document.getElementById("button2").addEventListener("click", loadImages);

let dataGlobal = [];

const customerData = async () => {
  const res = await fetch(URL);
  return res.json();
};

async function loadData() {
  const data = await customerData();
  dataGlobal = data;

  const tableBody = document.getElementById("customers-body");
  tableBody.innerHTML = ""; // Clear old rows

  dataGlobal.forEach((customer) => {
    const row = `
      <tr>
        <td>${customer.name}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}
async function loadImages() {
  const res = await fetch(URL2);
  const photos = await res.json();

  const imgTableBody = document.getElementById("photos-body");
  imgTableBody.innerHTML = "";

  photos.forEach((photo) => {
    const row = `
      <tr>
        <td><img src="${photo.url}" width="100"></td>
        <td>${photo.title || "No Title"}</td>
        <td>${photo.id}</td>
      </tr>`;
    imgTableBody.innerHTML += row;
  });
}



