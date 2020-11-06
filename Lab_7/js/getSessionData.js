// Get saved data from sessionStorage
let title = sessionStorage.getItem('title'); // Your code here
console.log("Here");
const val_1 = JSON.parse(title);

let lat_max = sessionStorage.getItem("lat_max");
let lat_min = sessionStorage.getItem("lat_min");
let lon_max = sessionStorage.getItem("lon_max");
let lon_min = sessionStorage.getItem("lon_min");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above


document.getElementById("title").innerHTML = val_1.title;