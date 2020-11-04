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
        sessionStorage.setItem('bus_route_info', JSON.stringify(main));

        console.log("Here");
        console.log(route);
        let title, latMax, latMin, lonMax, lonMin;
        let message = "";

        if (typeof route.title !== "undefined") {
          title = route.title;
          latMax = route.lat_max;
          latMin = route.lat_min;
          lonMax = route.lon_max;
          lonMin = route.lon_min;
          message = title + " <br>Lat max: " + latMax + " <br>Lat min: " + latMin + " <br>Lon Max: " + lonMax + " <br>Lon Min: " + lonMin;
        }
        else {
          message = "No bus info available";
        }
        console.log(title);
        main.innerHTML = "Bus Route Info: " + message;
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
