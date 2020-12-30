const { GraphQLServer } = require('graphql-yoga');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const prisma = require('./prisma');

// create Server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, prisma })
  }); 
}

module.exports = createServer;