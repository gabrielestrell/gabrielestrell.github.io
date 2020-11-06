const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        /*
        sessionStorage.setItem('bus_route_info', JSON.stringify(route));
        console.log("Stored bus route in session")
        console.log(route);*/

        
        let title;
        let lat_max;
        let lat_min;
        let lon_max;
        let lon_min;

        title = sessionStorage.setItem('title', route.title);
        //console.log(route);

        lat_max = sessionStorage.setItem('lat_max', route.lat_max);
        //console.log(route);

        lat_min = sessionStorage.setItem('lat_min', route.lat_min);
        //console.log(route);

        lon_max = sessionStorage.setItem('lon_max', route.lon_max);
        //console.log(route);

        lon_min = sessionStorage.setItem('lon_min', route.lon_min);
        console.log(route);

        //main.innerHTML = "Stored bus route in session" + JSON.stringify(route);

        main.innerHTML = "Session storage saved.";
        /*
        "Title: " + route.title + 
        "<br>Lat max: " + route.lat_max +
        "<br>Lat min: " + route.lat_min +
        "<br>Lot max: " + route.lon_max +
        "<br>Lot min: " + route.lon_min;
        */

      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
    
    sessionStorage.setItem('title', 'Nothing set');
    sessionStorage.setItem('lat_max', 'Nothing set');
    sessionStorage.setItem('lat_min', 'Nothing set');
    sessionStorage.setItem('lon_max', 'Nothing set');
    sessionStorage.setItem('lon_min', 'Nothing set');
  }
}
