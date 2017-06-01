const express = require('express');
const router = express.Router();

const Member = require('../models/member');
const MemberController = require('../controllers/memberController');

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ message: 'This is a test!' });
});

router.post('/', MemberController.saveMember);

module.exports = router;
