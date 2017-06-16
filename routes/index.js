const express = require('express');
const router = express.Router();
const cors = require('cors');
const Member = require('../models/member');
const MemberController = require('../controllers/memberController');

/* GET home page. */
router.get('/', cors(), function(req, res) {
  res.json({ message: 'This is a test!' });
});

// save new member
router.post('/members', cors(), MemberController.saveMember);

// gets all members list
router.get('/members', cors(), MemberController.getMembers);

// gets one member by id
router.get('/members/:id', cors(), MemberController.getOneMember);

router.delete('/members/:id', cors(), MemberController.deleteMember);

router.post('/members/:id/edit', cors(), MemberController.editMember);

module.exports = router;
