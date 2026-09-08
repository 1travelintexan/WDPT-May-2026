const mongoose = require("mongoose");
const PizzaModel = require("./models/pizza.model");
const express = require("express");
const UserModel = require("./models/user.model");
const app = express();

//connect to the DB
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/our-first-db");
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};
connectToDB();
//middlewares
//this middleware allows the parsing of the req.body
app.use(express.json());
//routes

//post route to create a user
app.post("/create-a-user", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//post route to create a pizza
app.post("/create-a-pizza", async (req, res) => {
  try {
    const createdPizza = await PizzaModel.create(req.body);
    console.log("pizza created:", createdPizza);
    res.status(201).json(createdPizza);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//route to get all pizzas
app.get("/pizzas", async (req, res) => {
  try {
    const allPizzasInDB = await PizzaModel.find().populate("owner");
    console.log("all pizzas: ", allPizzasInDB);
    res.json(allPizzasInDB);
  } catch (error) {
    console.log(error);
  }
});
//route to get one pizza
// dynamic route with a parameter
app.get("/pizzas/:pizzaId", async (req, res) => {
  try {
    const onePizzaFromDB = await PizzaModel.findById(
      req.params.pizzaId,
    ).populate("owner", "username email");
    console.log("one found pizza...", onePizzaFromDB);
    console.log("the id in the url:", req.params);
    res.json(onePizzaFromDB);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//route with query
app.get("/find-one-pizza", async (req, res) => {
  try {
    const foundPizza = await PizzaModel.findOne({ name: req.query.name });
    console.log("found pizza", foundPizza);
    if (!foundPizza) {
      res.json("No pizzas Matched");
    } else {
      res.json(foundPizza);
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//delete route to delete one pizza
app.delete("/delete-a-pizza/:id", async (req, res) => {
  try {
    const deletedPizza = await PizzaModel.findByIdAndDelete(req.params.id);
    console.log(deletedPizza);
    res.status(200).json(deletedPizza);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//route to update a pizza
app.patch("/update-a-pizza/:pizzaId", async (req, res) => {
  try {
    const updatedPizza = await PizzaModel.findByIdAndUpdate(
      req.params.pizzaId,
      req.body,
      { new: true },
    );
    console.log(updatedPizza);
    res.status(200).json(updatedPizza);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//make the server listen
app.listen(5005, () => {
  console.log("server is ready and listening");
});
