from user import User
from db import init_db_command
from oauthlib.oauth2 import WebApplicationClient
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from flask import Flask, redirect, request, url_for
import sqlite3
import json
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

# Configuration
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", None)
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", None)
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)


# Flask app setup
app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)

# User session management setup
# https://flask-login.readthedocs.io/en/latest
login_manager = LoginManager()
login_manager.init_app(app)

# Naive database setup
try:
    init_db_command()
except sqlite3.OperationalError:
    # Assume it's already been created
    pass

# OAuth 2 client setup
client = WebApplicationClient(GOOGLE_CLIENT_ID)

# Flask-Login helper to retrieve a user from our db


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


@app.route("/")
def index():
    if current_user.is_authenticated:
        return (
            "<p>Hello, {}! You're logged in! Email: {}</p>"
            "<div><p>Google Profile Picture:</p>"
            '<img src="{}" alt="Google profile pic"></img></div>'
            '<a class="button" href="/fetch_restaurant_data_from_location">Proceed to enter location\n</a>'
            '<a class="button" href="/logout">Logout</a>'.format(
                current_user.name, current_user.email, current_user.profile_pic
            )
        )

    else:
        return '<a class="button" href="/login">Google Login</a>'


def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()


@app.route("/login")
def login():
    # Find out what URL to hit for Google login
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    # Use library to construct the request for Google login and provide
    # scopes that let you retrieve user's profile from Google
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    response = make_response({"message": "Successfully logged in user!"}, 200)
    # return response
    return redirect(request_uri)


@app.route("/login/callback")
def callback():
    # Get authorization code Google sent back to you
    code = request.args.get("code")

    # Find out what URL to hit to get tokens that allow you to ask for
    # things on behalf of a user
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]

    # Prepare and send a request to get tokens! Yay tokens!
    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code
    )
    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )

    # Parse the tokens!
    client.parse_request_body_response(json.dumps(token_response.json()))

    # Now that you have tokens (yay) let's find and hit the URL
    # from Google that gives you the user's profile information,
    # including their Google profile image and email
    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    # You want to make sure their email is verified.
    # The user authenticated with Google, authorized your
    # app, and now you've verified their email through Google!
    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]
        picture = userinfo_response.json()["picture"]
        users_name = userinfo_response.json()["given_name"]
    else:
        return "User email not available or not verified by Google.", 400

    # Create a user in your db with the information provided
    # by Google
    user = User(
        id_=unique_id, name=users_name, email=users_email, profile_pic=picture
    )

    # Doesn't exist? Add it to the database.
    if not User.get(unique_id):
        User.create(unique_id, users_name, users_email, picture)

    # Begin user session by logging the user in
    login_user(user)

    # Send user back to homepage
    return redirect(url_for("index"))


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("index"))


# current code below

# Third-party libraries

# Internal imports
# current code above


"""
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
"""


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
    print(data)
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

            response = requests.request(
                "GET", url, headers=headers, params=querystring)
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
    app.run(port=8080, debug=True, ssl_context="adhoc")
"""
if __name__ == "__main__":
    app.run(ssl_context="adhoc")
"""
