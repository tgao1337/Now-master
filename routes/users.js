const express = require('express');
const User = require('../models/user');
const auth = require('./helpers/auth');
const router = express.Router();

//Render a new user page

router.get('/new', (req, res) => {
  res.render('newuser');
});

//Create a new user

router.post('/', (req, res) => {
  const user = new User(req.body);
  var letterNumber = /^[0-9a-zA-Z]+$/
  if (user.password.length > 5) {
    if (user.password === user.confirmPassword) {
      const username = user.username;
      User.find({ username }).then((users) => {
        if (users.length === 0) {
          user.save((err, user) => {
            if (err) console.log(err);
            return res.redirect('/login');
          });
        } else {
          return res.redirect('/users/new/taken');
        }
      }).catch((err) => {
        console.log(err.message);
      });
    } else {
      return res.redirect('/users/new/confirm');
    }
  } else {
    return res.redirect('/users/new/format');
  }
});

module.exports = router;
