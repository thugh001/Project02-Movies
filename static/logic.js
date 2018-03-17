
  // Use a request to grab the json data needed for all charts
d3.json('/movie', function(sampleData) {
 
  array=sampleData[4];
       var myMap = L.map("map", {
        center: [sampleData[4][0].lat, sampleData[4][0].lng],
        zoom: 13
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
for(i=0;i<sampleData[4].length;i++){
var marker = L.marker([sampleData[4][i].lat, sampleData[4][i].lng], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Movie Name:"+sampleData[0]+"<img src='"+sampleData[6]+"'>"

+"release Year:"+sampleData[3]+"\ngenres:"+sampleData[5]
);
}
  
    });



