// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");


// START OF YOUR CODE...
app.get('/quotes', (req, res) => {
  res.send(quotes);
})



//...END OF YOUR CODE

//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/quotes/random", (req, res) => {
 
  res.send(pickFromArray(quotes));
});


//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
