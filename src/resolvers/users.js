const formatErrors = require('../utils/formatErrors');

const users = {
  Query: {
    allUsers: async (_obj, _args, { models }) => {
      const searchResults = await models.users.findAll();
      const filteredArray = searchResults.filter(elem => ({
        id: elem.id,
        username: elem.username,
        email: elem.email,
      }));
      return filteredArray;
    },
  },
  Mutation: {
    createUser: async (_obj, { userName, email }, { models }) => {
      try {
        await models.users.create({
          user_name: userName,
          email,
        });
        return {
          ok: true,
        };
      } catch (err) {
        const e = formatErrors(err, models);
        return {
          ok: false,
          errors: e,
        };
      }
    },
  },
};

module.exports = users;
