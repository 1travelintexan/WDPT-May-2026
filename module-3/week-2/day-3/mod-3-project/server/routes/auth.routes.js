const router = require("express").Router();
const UserModel = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const isTokenValid = require("../middlewares/jwt.middleware");

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
    //min 6 characters, one uppercase and one lowercase with one special character
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    // if (!passwordRegex.test(password)) {
    //   return res.status(400).json({ errorMessage: "Password too weak" });
    // }

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
        //create an auth token
        //first get the data you want (_id)
        const { _id, username } = foundUser;
        const payload = { _id, username };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "12h",
        });
        res.status(200).json({
          message: "You are now logged in, nice work",
          authToken: authToken,
          foundUser: { _id: foundUser._id, username: foundUser.username },
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//verify route to check the token
router.get("/verify", isTokenValid, (req, res) => {
  res.json({ message: "verify route all good", payload: req.payload });
});
module.exports = router;
