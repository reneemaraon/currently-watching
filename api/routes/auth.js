const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/twitter", passport.authenticate("twitter"));

router.get("/showMe", (req, res) => {
  res.status(200).json({ user: req.user });
});

router.get(
  "/twitter/callback",
  (req, res, next) => {
    console.log("OAuth callback invoked");
    console.log("Session:", req.session);
    console.log("OAuth token:", req.query.oauth_token);
    console.log("OAuth verifier:", req.query.oauth_verifier);
    next();
  },
  passport.authenticate("twitter", {
    failureRedirect: process.env.CLIENT_HOME_PAGE_URL,
  }),
  (req, res) => {
    if (req.user) {
      console.log("OAuth callback successful, user:", req.user);
      // Successful authentication, redirect to frontend
      res.redirect(`${process.env.CLIENT_HOME_PAGE_URL}/login/callback`);
    } else {
      console.log("OAuth callback failed, no user found");
      res.status(401).send("Authentication failed");
    }
  }
);

router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
});

module.exports = router;
