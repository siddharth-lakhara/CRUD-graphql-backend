const allUsers = async (_obj, _args, { models }) => {
  const searchResults = await models.users.findAll();
  const filteredArray = searchResults.map(elem => ({
    id: elem.id,
    userName: elem.user_name,
    email: elem.email,
  }));
  return filteredArray;
};

module.exports = allUsers;
