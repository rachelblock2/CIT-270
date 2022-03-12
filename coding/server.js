const express = require("express");
const https = require('https');
const fs = require('fs')

const bodyParser = require("body-parser");
const md5 = require("md5");

const port = 443;

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello HTTPS!");
});

https.createServer({
    key: fs.readFileSync('PRIVATEKEY.key'),
    cert: fs.readFileSync('server.cert'),
    passphrase: 'P@ssw0rd'
  }, app).listen(port, () => {
    console.log('Listening...')
  })

app.post('/login', (req, res) => { //Goes to page off of localhost
    console.log(JSON.stringify(req.body)); //reads json req from loginscript
    let password = md5(req.body.password);
    if (req.body.userName ==="rachellofgran" && password === "8b96c177b8e8ea707ebe7ede3511f6e3") { //checks username and password
        res.send("Welcome!");
    } else {
        res.send("Who are you?");
    }
})

// app.listen(port, () => {});

// Authorization (auth) = how many permissions you have, ex. Adminstrator privileges
// Authentication (auth Z)= proving who you are
// npm start
// loginscript.bat