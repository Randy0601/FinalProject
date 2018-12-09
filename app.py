import requests
import json
from twitter import *
from flask import Flask, jsonify, render_template, request, redirect
from flask_pymongo import PyMongo

app = Flask(__name__)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/coffee"
app.config["MONGO_URI"] = "mongodb://washu:WashuData1@ds245523.mlab.com:45523/dataanalytics"
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/index.html")
def indexpage():
    return render_template("index.html")

@app.route("/tweets.html")
def tweets():
    return render_template('tweets.html')

@app.route("/feedback.html")
def findCoffee():
    return render_template('feedback.html')

@app.route("/stats.html")
def stats():
    return render_template('stats.html')

@app.route("/trends.html")
def trends():
    return render_template('trends.html')

@app.route("/team.html")
def team():
    return render_template('team.html')


twitter_header = {'Authorization': 'Bearer 1024005802112286720-tewTubcOAEiWSruFzKspp8oOrkKTeD'}

twitter_token = "1024005802112286720-tewTubcOAEiWSruFzKspp8oOrkKTeD"
twitter_token_secret = "WAQiyuFxAHuFBxhnKZ5pUABrSKtNLe6EMn9JHlVpmzRkR"
twitter_consumer_key = "f8mvOcjx2FW6fmLmrt4ZenOaQ"
twitter_consumer_secret = "TyKX2k9YIvlQjXiVvHINGecWpXqVVNodkmmOjuHlW1WrlBZayX"

t = Twitter(
    auth=OAuth(twitter_token, twitter_token_secret, twitter_consumer_key, twitter_consumer_secret))


@app.route('/getFlightPrediction/<airline>/<calendarDay>/<weekDay>/<hour>')
def getPrediction(airline,calendarDay,weekDay,hour):
    print("Inside getPrediction")
    print(airline)
    print(calendarDay)
    print(weekDay)
    print(hour)
    if airline == 'null':
        print ("Use model without airline")
    else:
        print ("Use model with airline")
    # Search for the latest tweets about #pycon
    response = 0
    print(response)
    return jsonify(response)

# @app.route('/scrapeCoffeeNews')
# def scrapeCoffeeNews():
#     listings = mongo.db.listings
#     listings_data = scrape_coffee_news.scrape()
#     listings.update({}, listings_data, upsert=True)
#     return news()

# @app.route('/scrape')
# def scrape():
#     listings = mongo.db.final_data
#     listings_data = scrape_coffee.scrape()
#     listings.update({}, listings_data, upsert=True)
#     return indexpage()

if __name__ == "__main__":
    app.run(debug=True)
