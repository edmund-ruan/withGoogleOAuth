# Proper Installation / Run Commands

1. Verify that you have python installed on your machine. You can do this by running the following commands in your terminal. (`python3 --version`) if on Mac or `python` if Windows. If not, install it [here](https://www.python.org/downloads/).
2. We need to open up two terminal instances. I suggest using Visual Studio Code for this. But you can also just open up two terminal instances on your computer.
3. If using VsCode, follow this step.  On VsCode you can type `ctrl + ~`. And you should see a terminal instance at the bottom. Press the split terminal button on the bottom panel that just opened (it should be next to the + on the terminal and it will be a square with a line through the center)
4. Now you should have two terminals open. We need one to run our frontend code that will display in the browser and another to run our server code

## Client

In the first terminal, run the following command to enter the `client` directory, 

```bash
cd client
```

You will need Node.js installed to run the frontend which we built using React.js, the most popular JavaScript framework for building websites.
You can download Node.js [here](https://nodejs.org/en/download/)

Verify that you have Node.js installed by running the following command in your terminal 

```bash
node -v

If installed correctly, you should see a version number appear as follows (note: the version number may not exactly match what is shown below)

v16.13.1
```

Now while inside the `client` directory run the following two commands

```bash
npm install 
npm run start
```

Now, you should see that the frontend will load on your computer, and if you these commands executed successfully, you will see the following in your terminal 

"You can now view client in the browser."

Now you are able to navigate to http://localhost:3000 and see the client


## Server
Note: to run the application properly, you must have both the server and the client running at the same time.

Now to run the server, navigate to the second terminal instance and follow the commands below

```bash
cd server

if mac: 

    python3 -m venv env

    source env/bin/activate

    pip3 install -r requirements.txt 

    python3 app.py

else windows: 

    py -m venv env

    .\env\Scripts\activate

    pip install -r requirements.txt

    set FLASK_APP=app.py
    set FLASK_ENV=development
    flask run

```


Navigate to http://localhost:8080, and you should see a message that says "Welcome to our server", if configured properly 