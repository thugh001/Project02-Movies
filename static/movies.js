	function transformData(myJson){
			 let movies = myJson[3];
			  
		    let data = movies.map(function(movie) {
		      return {
		        title: movie.title,
		        budget: movie.budget,
		        revenue: movie.revenue
		      };
		    });

		    return data;
		}

		function fetchData(url, cb) {
			loader.innerText = "Fetching..."

			fetch(url)
			  .then(function(response) {
			   loader.innerText = "Fetching Complete..."
				 return response.json();
			  })
			  .then(function(myJson) {
			   loader.innerText = "Transforming Data..."
			   	let data = transformData(myJson)
			   	console.log(data)
			   	cb(data)
			  })
			  .catch(err => console.error("Error fetching data: ", err.message));
		}

		function loadData() {
			window.loader = document.getElementById('loader')
			fetchData("https://m787rp1nna.execute-api.us-west-1.amazonaws.com/prod/queryTopGrossingMovies", function(data) {
			   loader.innerText = "Creating Chart..."
				createChart(data)
			})
		}

		function createChart(rawData) {
			let xTitle=[];
			let yBudget=[];
			let yRevenue=[];

			rawData.forEach(function(movie) {
				xTitle.push(movie.title)
				yBudget.push(movie.budget)
				yRevenue.push(movie.revenue)
			})

			var trace1 = {
			  x: xTitle,
			  y: yBudget,
			  name: 'Budget',
			  type: 'bar',
			   marker: {
    			color: 'blue',
    			opacity: 0.8,
  				}
			};

			var trace2 = {
			  x: xTitle,
			  y: yRevenue,
			  name: 'Revenue',
			  type: 'bar', 
			  marker: {
    			color: 'orange',
    			opacity: 0.8
  				}
			};

			var data = [trace1, trace2];

			var layout = {barmode: 'group'};

			Plotly.newPlot('graphDiv', data, layout);
			   loader.innerText = ""
		};
	