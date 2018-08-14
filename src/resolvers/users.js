const allUsers = require('./allUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');

const users = {
  Query: {
    allUsers,
  },
  Mutation: {
    createUser,
    updateUser,
  },
};

module.exports = users;
