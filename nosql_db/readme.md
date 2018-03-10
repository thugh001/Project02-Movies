This directory contains the Jupyter notebook that was used to load the movie data (50,000 records) into the AWS NoSQL database known as DynamoDB.  

The lambda_query_function.py contains python code which queries the movie database to find the top 100 grossing films of all time along with those films' metadata.  This data can be used create a number of interactive charts for the projects, and the query results return fairly quickly (2 seconds).

The query function is accesible via public API at https://m787rp1nna.execute-api.us-west-1.amazonaws.com/prod/queryTopGrossingMovies.  This API returns the top 100 grossing movies detailed data in JSON format. The API is hosted on the AWS API Gateway.