const _ = require('lodash');

const formatErrors = (e, models) => {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(x => _
      .pick(x, ['path', 'message']));
  }
  return [{
    path: 'unknown',
    message: 'There was some problem with your submission',
  }];
};

module.exports = formatErrors;
