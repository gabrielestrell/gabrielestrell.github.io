const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        sessionStorage.setItem('bus_route_info', JSON.stringify(route));
        console.log("Stored bus route in session")
        console.log(route);

        let title = route.title;
        let latMax = route.lat_max;
        let latMin = route.lat_min;
        let lonMax = route.lon_max;
        let lonMin = route.lon_min;

        document.getElementById("main").innerHTML = title + 
        "<br>Lat max: " + latMax +
        "<br>Lat min: " + latMin +
        "<br>Lon max: " + lonMax +
        "<br>Lon min: " + lonMin;
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
