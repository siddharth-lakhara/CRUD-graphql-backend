

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  return users;
};
