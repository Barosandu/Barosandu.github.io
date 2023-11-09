import flask

from flask import Flask, request, redirect, send_from_directory, url_for, render_template
from flask import stream_with_context, Response, abort, jsonify

app = Flask(__name__, static_folder='_static', static_url_path='')

@app.route("/")
def main():
    return redirect("/fall23/calendar")

@app.route("/fall23/calendar")
def calendar():
    return open("./_static/Calendar-6-101.html")

@app.route("/fall23/readings/intro")
def intro():
    return open("./_static/Intro-Course-Readings-6-101.html")
