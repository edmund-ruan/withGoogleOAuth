from flask import Flask, render_template, request
from dotenv import load_dotenv
import requests
import os 

load_dotenv()

app = Flask(__name__, template_folder="templates")

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/request", methods=["POST", "GET"])
def request_api():
    location = request.form.get("location")
    payload = {"location": location}
    url = "https://api.yelp.com/v3/businesses/search"
    api_key = os.getenv("YELP_API_KEY")
    headers = {"Authorization": 'Bearer %s' % api_key}
    response = requests.get(url, params=payload, headers=headers)
    data = response.json()
    allBusinesses = data["businesses"]
    names = [val["name"] for val in allBusinesses]
    return render_template("index.html", businesses = names)

if __name__ == "__main__":
    app.run(debug=True)