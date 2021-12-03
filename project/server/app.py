from flask import Flask

app = Flask(__name__)

@app.route("/", methods=['GET'])
def get():
    return "Welcome to our server"

if __name__ == "__main__":
    app.run(port=8080, debug=True)