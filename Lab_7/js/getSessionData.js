// Get saved data from sessionStorage
let title = sessionStorage.getItem("title", route); // Your code here
let lat_max = sessionStorage.getItem("lat_max", route);
let lat_min = sessionStorage.getItem("lat_min", route);
let lon_max = sessionStorage.getItem("lon_max", route);
let lon_min = sessionStorage.getItem("lon_min", route);

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above


document.getElementById("title").innerHTML = title;