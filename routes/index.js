const express = require('express');
const router = express.Router();

const Member = require('../models/member');

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ message: 'This is a test!' });
});

// router.post('/', )

module.exports = router;
