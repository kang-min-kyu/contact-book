var express = require(`express`);
var router = express.Router();

// Home
router.get("/", (req, res) => {
  res.redirect("/contacts");
});

module.exports = router;
