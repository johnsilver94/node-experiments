const express = require("express");
const { ensureAuth, ensureGuest } = require("../middleware/auth.js");
const Story = require("../models/story.js");

const router = express.Router();

router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean();
    res.render("dashboard", {
      name: req.user.firstName,
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});
module.exports = { router };
