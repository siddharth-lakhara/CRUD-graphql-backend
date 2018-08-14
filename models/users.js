

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    user_name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain letter and numbers',
        },
        len: {
          args: [1, 15],
          msg: 'The username needs to be between 1 and 10 characters long',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email',
        },
      },
    },
  }, {
    define: {
      underscored: true,
    },
  });
  return users;
};
