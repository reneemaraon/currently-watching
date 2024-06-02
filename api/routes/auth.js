const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/twitter', passport.authenticate('twitter'));

router.get('/showMe', (req, res) => {
  res.status(200).json({ user: req.user });
});

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: `${process.env.CLIENT_HOME_PAGE_URL}/login`,
    successRedirect: `${process.env.CLIENT_HOME_PAGE_URL}/login/callback`,
    session: true,
  })
);

router.post('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
