const isUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    throw new Error('Not logued in.');
  }
};

const isSuperAdmin = (req, res, next) => {
  if (req.user && req.user.isSuperAdmin) {
    next();
  } else {
    throw new Error('Not Admin User.');
  }
};

module.exports = {
  isUser,
  isSuperAdmin
};