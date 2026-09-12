const router = require("express").Router();
const UserModel = require("../models/User.model");

const bcrypt = require("bcrypt");

//sign up route to create a new user
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //check if the email or username are already taken
    const foundUserByEmail = await UserModel.findOne({ email: email });
    if (foundUserByEmail) {
      return res.status(400).json({ errorMessage: "Invalid Credentials" });
    }
    const foundUserByUsername = await UserModel.findOne({ username });
    if (foundUserByUsername) {
      return res.status(400).json({ errorMessage: "Invalid Credentials" });
    }
    //check the password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({ errorMessage: "Password too weak" });
    }

    //before creating a user, hash the password for security
    const saltRounds = 12;
    const theSalt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(req.body.password, theSalt);
    const createdUser = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    const foundUser = await UserModel.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(400).json({ errorMessage: "Invalid Credentials" });
    } else {
      const doesPasswordsMatch = bcrypt.compareSync(
        req.body.password,
        foundUser.password,
      );
      if (!doesPasswordsMatch) {
        res.status(400).json({ errorMessage: "Invalid Credentials" });
      } else {
        res.status(200).json({ message: "You are now logged in, nice work" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
