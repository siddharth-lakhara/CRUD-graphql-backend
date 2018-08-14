const formatErrors = require('../utils/formatErrors');

const createUser = async (_obj, { userName, email }, { models }) => {
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
};

module.exports = createUser;
