const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

// mongoDB Schema
const Product = require("./models/Product");
const User = require("./models/User");

// GraphQl Schema
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

// Bring in graphqlExpress Middleware

const { ApolloServer } = require("apollo-server-express");
const server = new ApolloServer({
  typeDefs,
  resolvers,
//   formatError: error => ({
//     name: error.name,
//     message: error.message.replace("Context creation failed:", "")
//   }),
//   context: async ({ req }) => {
//     const token = req.headers["authorization"];
//     return { User, Post, currentUser: await getUser(token) };
//   }
});

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(err => console.log(err));

const app = express();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT}`);
});
