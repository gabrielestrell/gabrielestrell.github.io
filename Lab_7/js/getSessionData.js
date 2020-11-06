// Get saved data from sessionStorage
let title = sessionStorage.getItem("title", route.title); // Your code here
let lat_max = sessionStorage.getItem("lat_max", route.lat_max);
let lat_min = sessionStorage.getItem("lat_min", route.lat_min);
let lon_max = sessionStorage.getItem("lon_max", route.lon_max);
let lon_min = sessionStorage.getItem("lon_min", route.lon_min);

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above


title.innerHTML = title;