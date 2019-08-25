const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

module.exports = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    console.log("no cookie");
  }
  if (!authHeader || authHeader === "") {
    return next();
  }
  const accessToken = authHeader.split(' ')[1]
  let decodedToken;
  try {
    decodedToken = await jwt.verify(accessToken, JWT_SECRET);
  } catch (err) {
    console.log("Couldn't Decode");
    return next();
  }
  if (!decodedToken) {
    console.log("no decoded token");
    return next();
  }
  req.userId = decodedToken.userId; 
  req.next();
};
