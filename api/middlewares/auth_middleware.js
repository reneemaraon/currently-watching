const User = require('../models/User');

// Middleware function for authentication using Passport
const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next(); // User is authenticated, proceed to the next middleware or route handler
    }
    res.status(401).json({ message: 'Not logged in' }); // Not authenticated, send unauthorized response
};

const authorize = (req, res, next) => {
  if (req.user && req.user.role == 'admin') {
    next(); // User is an admin, allow access
  } else {
    res.status(403).json({ message: 'Unauthorized user type' }); // User is not an admin
  }
}


module.exports = {
  authenticate,
  authorize,
};