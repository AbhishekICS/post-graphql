require('dotenv').config()
const typeDefs = require('./graphQL/typeDefs')
const resolvers = require('./graphQL/resolvers')
const { ApolloServer, gql} = require('apollo-server')
const connectDB = require('./config/db')

const server = new ApolloServer({ typeDefs, resolvers})
connectDB()

server.listen().then(({ url }) => {
	console.log("Server is running on " + url);
  });