const User = require('../models/user');
const { UnauthenticatedError } = require('../errors');

// Middleware function for authentication using Passport
const authenticate = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware or route handler
  }
  throw new UnauthenticatedError('Not logged in.');
};

const authorize = (req, res, next) => {
  if (req.user && req.user.role == 'admin') {
    next(); // User is an admin, allow access
  } else {
    throw new UnauthenticatedError('Unauthorized user type');
  }
};

module.exports = {
  authenticate,
  authorize,
};
