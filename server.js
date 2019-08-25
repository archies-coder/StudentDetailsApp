const userModel = require('./models/users');
const jwt = require('jsonwebtoken');
const dbURI = require("./config/keys").mongoURI;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const graphqlHTTP = require("express-graphql");

//Constants
const { JWT_SECRET } = require("./config/keys");

//Graphql
const graphQLSchema = require("./graphql/schema");
const graphQLResolver = require("./graphql/resolvers");

//Middleware
const isAuth = require('./middleware/is-auth');

//Express app
const app = express();

//Allow Cross-origin requests
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000" // frontend url.
}));

//BodyParser
app.use(bodyParser.json());

//Connect to mongo
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected ");
  })
  .catch(err => console.log(err));

//Cookie-Parser
app.use(cookieParser());

app.use(isAuth);

//Middleware
// app.use(async (req, res, next) => {
//   const accessToken = req.headers.authorization.split(' ')[1];
//   if (!accessToken) {
//   console.log("no cookie");
//     return next();
//   }
//   let decodedToken;
//   try {
//     decodedToken = await jwt.verify(accessToken, JWT_SECRET);
//   } catch (err) {
//     console.log('no decoded token');
//     return next();
//   }
//   req.userId = decodedToken.userId;
//   req.next();
// });

app.use(
  "/graphql",
  graphqlHTTP(async ( req, res ) => ({
    schema: graphQLSchema,
    rootValue: graphQLResolver,
    context: { req, res},
    graphiql: true
  }))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
