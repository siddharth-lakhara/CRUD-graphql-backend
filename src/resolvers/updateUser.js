const formatErrors = require('../utils/formatErrors');

const updateUser = async (_obj, { userName, email }, { models }) => {
  // updates userName when Email is provided
  try {
    const affectedRows = await models.users.update(
      { user_name: userName },
      { where: { email } },
    );
    if (!affectedRows[0]) {
      return {
        ok: false,
        errors: [{
          path: 'email',
          message: 'No user found with provided email address',
        }],
      };
    }
    return {
      ok: true,
    };
  } catch (err) {
    return {
      ok: false,
      errors: formatErrors(err, models),
    };
  }
};

module.exports = updateUser;
