const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Browser!");
});

app.post('/login', (req, res) => {
    console.log(JSON.stringify(req.body));
    if (req.body.userName ==="rachellofgran" && req.body.password === "rachie10!") {
        res.send("Welcome!");
    } else {
        res.send("Who are you?");
    }
})

app.listen(port, () => {});

// Authorization (auth) = how many permissions you have, ex. Adminstrator privileges
// Authentication (auth Z)= proving who you are