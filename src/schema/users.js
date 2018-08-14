
const users = `
  type User {
    id: Int!
    userName: String!
    email: String!
  }
  
  type updateUserResponse {
    ok: Boolean!
    msg: String
    errors: [Error!]
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(userName: String!, email: String!): updateUserResponse!
    updateUser(userName: String!, email: String!): updateUserResponse!
    deleteUser(userName: String!): updateUserResponse!
  }
`;

module.exports = users;
