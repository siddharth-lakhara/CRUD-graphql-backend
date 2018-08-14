
const users = `
  type User {
    id: Int!
    username: String!
    email: String!
  }
  
  type RegistrationResponse {
    ok: Boolean!
    msg: String
    errors: [Error!]
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(userName: String!, email: String!): RegistrationResponse!
  }
`;

module.exports = users;
