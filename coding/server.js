const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Browser!");
});

app.post('/login', (req, res) => { //Goes to page off of localhost
    console.log(JSON.stringify(req.body)); //reads json req from loginscript
    let password = md5(req.body.password);
    if (req.body.userName ==="rachellofgran" && password === "5bf5ed97b6d7f58c4a8f09eee51cb448") { //checks username and password
        res.send("Welcome!");
    } else {
        res.send("Who are you?");
    }
})

app.listen(port, () => {});

// Authorization (auth) = how many permissions you have, ex. Adminstrator privileges
// Authentication (auth Z)= proving who you are
// npm start
// loginscript.bat