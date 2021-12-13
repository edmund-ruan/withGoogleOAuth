from flask import Flask, Response, request, make_response, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_bcrypt import Bcrypt
import requests
import os
from functools import wraps

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/cs411-final-db"
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
db = mongo.db


def login_required(function_to_protect):
    @wraps(function_to_protect)
    def wrapper(*args, **kwargs):
        user_id = request.cookies.get('session')
        if user_id:
            print(user_id)
            user = db.users.find_one({"_id": ObjectId(user_id)})
            if user:
                # Success!
                return function_to_protect(*args, **kwargs)
            else:
                return Response("Unable to find user with cookie. Please login again", status=400)
        else:
            return Response("Please login", status=400)
    return wrapper


@app.route("/", methods=['GET'])
def get():
    return "Welcome to our server"

@app.route("/register", methods=["POST"])
def register():
    name = request.form.get("name")
    email = request.form.get("email")
    password = request.form.get("password")

    pw_hash = hash(password)

    userObject = {
        "name": name, 
        "email": email, 
        "password": pw_hash
    }

    # check if user already exists with given email
    try:
        existing_user = db.users.find_one({"email": email})
        if existing_user:
            return make_response({"message": "User already exists with this email"}, 400)
        _id = db.users.insert_one(userObject).inserted_id
        if _id:
            response = make_response({"message": "Registered user!"}, 200)
            response.set_cookie('session', str(_id))
            return response
        else: 
            return make_response({"message": "unable to create an account at this time"}, 400)
    except:
        return make_response({"message": "unable to create an account at this time"}, 400)


@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = request.form.get("password")

    # check if user already exists with given email
    try:
        existing_user = db.users.find_one({"email": email})
        if existing_user:
            pw_match = checkHash(existing_user['password'], password)
            if pw_match:
                response = make_response({"message": "Successfully logged in user!"}, 200)
                response.set_cookie('session', str(existing_user['_id']))
                return response
        return make_response({"message": "Incorrect email or password!"}, 400)
    except:
        return make_response({"message": "Unable to login with an account at this time"}, 400)

@app.route("/is_logged_in", methods=["GET"])
def is_logged_in():
    user_id = request.cookies.get('session')
    if user_id:
        user = db.users.find_one({"_id": ObjectId(user_id)})
        if user:
            return make_response({"message": "Successfully logged in", "isLoggedIn": True}, 200) 
    return make_response({"message": "Session has expired"}, 401)

@app.route("/get-user", methods=["POST"])
def get_user():
    email = request.args.get("email")
    # check if user already exists with given email
    try:
        user = db.users.find_one({"email": email})
        if user:
            return make_response(user, 200)
        else: 
            return make_response({"message": "unable to find user"}, 400)
    except:
        return make_response({"message": "unable to fetch account at this time"}, 400)

@app.route("/fetch_restaurant_data_from_location", methods=["POST", "GET"])
@login_required
def restaurant_api_search():
    location = request.form.get("location")
    print(location)
    payload = {"location": location}
    url = "https://api.yelp.com/v3/businesses/search"
    api_key = os.getenv("YELP_API_KEY")
    headers = {"Authorization": 'Bearer %s' % api_key}
    response = requests.get(url, params=payload, headers=headers)
    data = response.json()
    allBusinesses = data["businesses"]
    return make_response({"businesses": allBusinesses})

@app.route("/fetch_apartment_data_from_location", methods=["GET"])
@login_required
def apartment_api_search():
    try:
        city = request.args.get("city")
        state = request.args.get("state")
        if city and state and request.method == "GET":
            url = "https://realty-mole-property-api.p.rapidapi.com/saleListings"
            querystring = {
                "city": city,
                "state": state
            }

            headers = {
                'x-rapidapi-host': "realty-mole-property-api.p.rapidapi.com",
                'x-rapidapi-key': os.getenv("APARTMENT_API_KEY")
                }
            
            response = requests.request("GET", url, headers=headers, params=querystring)
            data = response.json()
            return make_response({"message": "Successfully found apartments", "apartments": data}, 200)
        else:
            return make_response({"message": "Invalid parameters"}, 400)
    except:
        return make_response({"message": "Unable to find apartments based on location"}, 400)

def hash(password):
     return bcrypt.generate_password_hash(password)

def checkHash(hashed, plain):
    return bcrypt.check_password_hash(hashed, plain)

if __name__ == "__main__":
    app.run(port=8080, debug=True)