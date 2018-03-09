# -*- coding: utf-8 -*-
from flask import Flask, url_for, render_template, request
from format_name import *
import requests
import json

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def api_root():
    if request.method == 'POST':
        movie_name= request.form['movie_name']
        # Note that the ?t= is a query param for the t-itle of the
        # movie we want to search for.
        url = "http://www.omdbapi.com/?t="
        api_key = "&apikey=9c400e50"
        # Performing a GET request similar to the one we executed
        response = requests.get(url + movie_name+ api_key)
        omdb_request = requests.get(url + movie_name + api_key)
        omdb_result = omdb_request.json()
        return render_template("index.html", movie_name=movie_name, omdb_request=omdb_result)
    return render_template("index.html")
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
