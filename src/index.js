const Hapi = require('hapi');
// const { apolloHapi, graphiqlHapi } = require('apollo-server');
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
// const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./schema/ping');
const resolvers = require('./resolvers/ping');

const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers,
});

const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});

const registerGraphql = {
  plugin: graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema,
    },
    route: {
      cors: true,
    },
  },
};

const registerGraphiQL = {
  plugin: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    },
  },
};

const start = async () => {
  try {
    await server.register(registerGraphql);
    await server.register(registerGraphiQL);

    await server.start();
  } catch (err) {
    console.log('Catch err');
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running at ${server.info.uri}`);
};

start();

module.exports = server;
