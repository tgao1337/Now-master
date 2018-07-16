const express = require('express');
const Task = require('../models/task');

const router = express.Router();

//index (view all tasks)

router.get('/', (req, res) => {
  //TODO
});

//show (Select an individual task)

router.get('/:id', (req, res) => {
  //TODO
});

//new

router.get('/new', (req, res) => {
  //TODO
});

//create

router.post('/', (req, res) => {
  //TODO
});

module.exports = router;
