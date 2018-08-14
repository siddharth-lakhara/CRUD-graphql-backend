const models = require('../../models');

const users = {
  Query: {
    allUsers: async () => {
      const searchResults = await models.users.findAll();
      const filteredArray = searchResults.filter(elem => ({
        id: elem.id,
        username: elem.username,
        email: elem.email,
      }));
      return filteredArray;
    },
  },
};

module.exports = users;
