const Hapi = require('hapi');
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');
const path = require('path');

const models = require('../models');

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
  typeDefs,
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
      pretty: true,
      schema,
      context: {
        models,
      },
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
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running at ${server.info.uri}`);
};

start();

module.exports = server;
