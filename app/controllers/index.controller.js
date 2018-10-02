let express = require('express');
let router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  res.redirect(301, "/posts/");
});


module.exports = router;
