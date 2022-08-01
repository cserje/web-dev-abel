from flask import Flask, render_template
from random import random
from math import ceil

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/v1/theMeaningOfLife", methods=["GET"])
def getTheMeaningOfLife():
    return "42";

@app.route("/api/v1/random", methods=["GET"])
def getRandom():
    return str(ceil(random()*int(getTheMeaningOfLife())))
