const express = require('express');
var router = express.Router();
const tasks = require('./tasks');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res) => {
  console.log('Login screen');
  res.render('login', {});
});



module.exports = router;
