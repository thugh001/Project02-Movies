from flask import Flask, jsonify, render_template,request,session
import googlemaps
import requests
import json
import pprint
import os
app = Flask(__name__)
app.secret_key = "super secret key"
@app.route("/",methods=["POST","GET"])
def index():
    if request.method == "POST":
        movie = request.form["movie_id"]
        session["movie_id"] = movie
        return render_template('index.html',movie_id=movie)
    return render_template('index.html')
@app.route("/movie")
def about():
        
    url = 'http://api.myapifilms.com/imdb/idIMDB?idIMDB='+session["movie_id"]+'&token=7b2adc1c-9b53-43af-8707-8f5e86330f4b&filmingLocations=2'
    response = requests.get(url)
    data=response.text
    data_dic=json.loads(data)
    address=data_dic['data']['movies'][0]['filmingLocations'][0]['location']
    title=data_dic['data']['movies'][0]['title']
    releaseDate=data_dic['data']['movies'][0]['releaseDate']
    year=data_dic['data']['movies'][0]['year']
    urlPoster=data_dic['data']['movies'][0]['urlPoster']
    
    api_key='AIzaSyAfjr3okyZP2lyKVPQZ3tcnEaok80qQu9E'
    gm=googlemaps.Client(key=api_key)
    geocode_result=gm.geocode(address)
    location=geocode_result[0]['geometry']['location']
    genres=data_dic['data']['movies'][0]['genres']
    urlPoster=data_dic['data']['movies'][0]['urlPoster']
    parameters=[title,address,releaseDate,year,location,genres,urlPoster]
    return jsonify(parameters)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)