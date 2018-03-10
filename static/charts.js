function init() {

    var layout = {
      height: 500,
      width: 500
    };
   
    moviesURL="https://m787rp1nna.execute-api.us-west-1.amazonaws.com/prod/queryTopGrossingMovies";
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", moviesURL, false);
    xhttp.send();
    
    var myArray = JSON.parse(xhttp.responseText);
    
    /*var labels = myArray.samples.otu_ids.slice(0,9);
    var data_points = myArray.samples.sample_values.slice(0,9);
    
    var data = [{
        values: data_points,
        labels: labels,
        type: "pie"
    }];   
    
    Plotly.plot("pie", data, layout);
    
    // Bubble chart
    const xAxis = [];
    const yAxis = [];
    const radii = [];
    const colors = [];
    const UPPER_BOUND = 9;
    // Create an x-axis
    // Create corresponding y-data w/sizes correlated to x coordinate
    // @Objective
    
    var red=0;
    var green=0;
    var blue=0;
    
    for (var x = 0; x < UPPER_BOUND; x++) {
        xAxis.push(labels[x]);
        yAxis.push(data_points[x]);

        // TODO: Change the value below to experiment
        radii.push(data_points[x]);
        red=Number(labels[x]);
        green=Number(labels[x]);
        blue=Number(labels[x]);
        colors.push(`rgb(${red/100},${green/1000},${blue/10}`);
        } */

 /*   // @Objective
    const bubbledata = [{
        x: xAxis,
        y: yAxis,
        mode: "markers",
        marker: {
            size: radii,
            color: colors
        }
    }];

    // @Objective
    const bubblelayout = {
        showlegend: false,
        height: 500,
        width: 1000
        };

    Plotly.newPlot("bubble", bubbledata, bubblelayout); */
}

/* function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata[0].values]);
    Plotly.restyle(PIE, "lables", [newdata[0].labels]);
}

function getData(dataset) {
    var data = [];
    
    initialSample=dataset;
    samplesURL="/samples/"+dataset;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", samplesURL, false);
    xhttp.send();
    
    var myArray = JSON.parse(xhttp.responseText);
    
    var labels = myArray.samples.otu_ids.slice(0,9);
    var data_points = myArray.samples.sample_values.slice(0,9);

    var data = [{
        values: data_points,
        labels: labels
        }];
    
    updatePlotly(data);
}

function addSelector(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/names", false);
    xhttp.send();

    if (xhttp.readyState==4 && xhttp.status==200)
      {
         var a = JSON.parse(xhttp.responseText);
      }
    var elem = document.getElementById('selDataset');
    
    for (i = 1; i < a.samples.length; i++) {
        var element=a.samples[i];
        elem.options.add( new Option(element, element) );
    }
    
} */

init();