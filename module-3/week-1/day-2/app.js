const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));
//this is a new line of code... watch what nodemon does...
//data
const pizzas = [
  { title: "pineapple", cost: 5 },
  { title: "pepp", cost: 15 },
  { title: "cheese", cost: 3 },
];
//our routes
//this is a get route example
//routes need two things... the path and a callback
app.get("/", (request, response) => {
  response.send("this is a response from our server");
});
app.get("/pizzas", (req, res) => {
  res.send(pizzas);
});
app.get("/pets", (req, res) => {
  //sending a file back instead of just test or data
  res.sendFile(__dirname + "/pages/pets.html");
});
// server needs to be listening for requests
app.listen(5005, () => {
  console.log("the server is running on port 5005, nice work");
});
