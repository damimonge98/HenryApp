const isUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ msg: "You are not logued in." });
  }
};

const isSuperAdmin = (req, res, next) => {
  if (req.user && req.user.isSuperAdmin) {
    next();
  } else {
    res.status(401).json({ msg: "You are not superadmin." });
  }
};

module.exports = {
  isUser,
  isSuperAdmin
};