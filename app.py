from flask import Flask, render_template, jsonify

names = ["Joseph","Cherish", "Abenasa", "Dugho"]

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("welcome.html")

@app.route("/projects")
def projects():

    return render_template("projects.html")