const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});

const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running at ${server.info.uri}`);
};

start();

module.exports = server;
