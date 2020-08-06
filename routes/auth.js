const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    console.log(req);
    res.redirect("/dashboard");
  }
);

// @desc    Google auth callback
// @route   GET /auth/google/callback
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log(req);
    res.redirect("/dashboard");
  }
);

// @desc    Logout user
// @route   /auth/logout
authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = { authRouter };
