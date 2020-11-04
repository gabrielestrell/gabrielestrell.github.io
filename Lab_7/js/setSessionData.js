const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute"); // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        sessionStorage.setItem('bus_route_info', JSON.stringify(busRoute));
        console.log("Stored bus route in session")
        console.log(busRoute);

        let title = busRoute.title;
        let latMax = busRoute.lat_max;
        let latMin = busRoute.lat_min;
        let lonMax = busRoute.lon_max;
        let lonMin = busRoute.lon_min;

        document.getElementById("main").innerHTML = title + 
        "<br>Lat max: " +
        "<br>Lat min: " +
        "<br>Lon max: " +
        "<br>Lon min: ";
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
