// Get saved data from sessionStorage
let title = sessionStorage.getItem(route.title); // Your code here
let lat_max = sessionStorage.getItem("lat_max");
let lat_min = sessionStorage.getItem("lat_min");
let lon_max = sessionStorage.getItem("lon_max");
let lon_min = sessionStorage.getItem("lon_min");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above


document.getElementById("title").innerHTML = route.title;