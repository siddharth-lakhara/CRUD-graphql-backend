
const users = `
  type User {
    id: Int!
    username: String!
    email: String!
  }
  
  type Query {
    allUsers: [User!]!
  }
`;

module.exports = users;
