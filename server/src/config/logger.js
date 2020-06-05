const morganBody = require('morgan-body');
const logger = (instance) => {
  return morganBody(instance, { logReqUserAgent: false });
};
module.exports = { logger };
