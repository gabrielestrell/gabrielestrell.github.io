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
        sessionStorage.setItem('bus_route_info', JSON.stringify(busRoute));
        console.log("Stored bus route in session")
        console.log(busRoute);

        /*
        let title = route.title;
        let latMax = route.lat_max;
        let latMin = route.lat_min;
        let lonMax = route.lon_max;
        let lonMin = route.lon_min;
        */

        document.getElementById("main").innerHTML = "Stored bus route in session" + JSON.stringify(busRoute);
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
