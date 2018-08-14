
const ping = `
  type Query {
    ping: String
  }

  schema {
    query: Query
  }
`;

// module.exports = () => [ping];
module.exports = ping;
