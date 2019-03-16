const dbURI = require('./config/keys').mongoURI;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphQLHttp = require('express-graphql');
//Schema
const graphQLSchema = require('./graphql/schema');
const graphQLResolver = require('./graphql/resolvers');
//Express app
const app = express();
//Allow Cross-origin requests
app.use(cors());
//BodyParser
app.use(bodyParser.json());
//Connect to mongo
mongoose.connect(dbURI, { useNewUrlParser: true }).then((res)=>{
    console.log('connected');
}).catch(err=>console.log(err));

//GraphQL
app.use('/graphql', graphQLHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolver,
    graphiql: true
}));

console.log(graphQLResolver.StudentsId)

//Use Routes
// app.use('/api/items',items);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
