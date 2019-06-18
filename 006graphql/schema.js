const { gql } = require('apollo-server-express');
 
exports.typeDefs = gql`

  type Query {
    recipes: [Product]!
    users: [User]!
  }
 
  type Product{
    name: String!
    category: String!
    description: String!
    price: Int!
    createdDate: String
    likes: Int
    username: String
  }
 
  type User{
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Product]
  }
`;