const express = require('express');
const router = express.Router();

const Member = require('../models/member');
const MemberController = require('../controllers/memberController');

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ message: 'This is a test!' });
});

// save new member
router.post('/members', MemberController.saveMember);

// gets all members list
router.get('/members', MemberController.getMembers);

// gets one member by id
router.get('/members/:id', MemberController.getOneMember);

router.delete('/members/:id', MemberController.deleteMember);

router.post('/members/:id/edit', MemberController.editMember);

module.exports = router;
