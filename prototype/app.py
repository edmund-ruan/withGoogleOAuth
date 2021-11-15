from flask import Flask, render_template, request
import requests

app = Flask(__name__, template_folder="templates")

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/request", methods=["POST", "GET"])
def request_api():
    location = request.form.get("location")
    print(location)
    payload = {"location": location}
    url = "https://api.yelp.com/v3/businesses/search"
    api_key = "ocWIi_bS2UjPrMrUcxVkERP8pPcRgrOZRSnhXI5BMPVh3M5vy0qn2brBujUwBpxSowp7D0faBaxoiE1EnopkbXN0x5bbkJN86zkXqoHO_ttPLC-nSietpqxGAtiRYXYx"
    headers = {"Authorization": 'Bearer %s' % api_key}
    response = requests.get(url, params=payload, headers=headers)
    data = response.json()
    allBusinesses = data["businesses"]
    names = [val["name"] for val in allBusinesses]
    return render_template("index.html", businesses = names)

if __name__ == "__main__":
    app.run(debug=True)