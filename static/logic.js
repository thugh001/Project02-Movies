

console.log("I AM WORKING !!!!!");
console.log("I AM WORKING !!!!!");
console.log("I AM WORKING !!!!!");

// Use a request to grab the json data needed for all charts

d3.json('https://ucimoviedemo.herokuapp.com/movie', function(sampleData) {
      console.log(sampleData[6]);
       var myMap = L.map("map", {
        center: [sampleData[4].lat, sampleData[4].lng],
        zoom: 10
      });

  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
      "access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ." +
      "T6YbdDixkOBWH_k9GbS8JQ"
  ).addTo(myMap);

  // Create a new marker
  // Pass in some initial options, and then add it to the map using the addTo method
  var marker = L.marker([sampleData[4].lat, sampleData[4].lng], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);

  // Binding a pop-up to our marker
  marker.bindPopup("Movie Name:"+sampleData[0]+"<img src='"+sampleData[6]+"'>");
    

    });