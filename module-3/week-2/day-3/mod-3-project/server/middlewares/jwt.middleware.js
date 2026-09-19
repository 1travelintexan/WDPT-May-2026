const jwt = require("jsonwebtoken");

const isTokenValid = (req, res, next) => {
  //get the token from the req
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const theToken = req.headers.authorization.split(" ")[1];
    try {
      //verify that the token is valid
      const data = jwt.verify(theToken, process.env.TOKEN_SECRET);
      //attach the payload to the req before calling next()
      req.payload = data;

      next();
    } catch (error) {
      res.status(500).json({
        errorMessage: "token invalid",
      });
    }
  } else {
    res.status(500).json({
      errorMessage: "token malformed",
    });
  }
};

module.exports = isTokenValid;
