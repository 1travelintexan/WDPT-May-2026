const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const allPizzas = require("./data/pizzas.json");
//middlewares
//morgan logs every request to the terminal
app.use(morgan("dev"));
//express.static tells the server where to find the static assets such as css files and images
app.use(express.static("public"));
//express.json() parses incoming POST requests to be able to see the .body of the request
app.use(express.json());

//routes
//get route to get all pizzas
app.get("/api/all-pizzas", (request, response) => {
  //check if the user is able to see the pizzas
  //get the pizzas from the DB
  //return the pizzas to the frontend

  response.json(allPizzas);
  //if there an error, send the error instead
});
//get single pizza route
//dynamic route that has the id in the url
app.get("/api/one-pizza/:pizzaId", (req, res) => {
  // const thePizzaId = req.params.pizzaId;
  //with destructuring
  const { pizzaId } = req.params;
  const foundPizza = allPizzas.find((onePizza) => onePizza._id == pizzaId);
  res.json(foundPizza);
});
//pages routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/about", (req, res) => {
  const { bestDog, bestPizza } = req.query;
  console.log({ bestDog, bestPizza });
  res.sendFile(path.join(__dirname, "views/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contact.html"));
});
//start the server and make it listen
app.listen(5005, () => {
  console.log("server is running");
});
