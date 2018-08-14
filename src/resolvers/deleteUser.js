const formatErrors = require('../utils/formatErrors');

const deleteUser = async (_obj, { userName }, { models }) => {
  try {
    const count = await models.users.destroy({ where: { user_name: userName } });
    if (count) {
      return {
        ok: true,
      };
    }
    return {
      ok: false,
      errors: [{
        path: 'deleteUser',
        message: 'User not found',
      }],
    };
  } catch (err) {
    return {
      ok: false,
      errors: formatErrors(err, models),
    };
  }
};

module.exports = deleteUser;
