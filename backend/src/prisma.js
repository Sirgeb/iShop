// connects to the remote prisma DB
const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET
});

module.exports = prisma;
