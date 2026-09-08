const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  calories: Number,
  ingredients: {
    type: [String],
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const PizzaModel = mongoose.model("pizza", pizzaSchema);

module.exports = PizzaModel;
