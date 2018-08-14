const allUsers = require('./allUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

const users = {
  Query: {
    allUsers,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};

module.exports = users;
