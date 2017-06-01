const mongoose = require('mongoose');

const Member = require('../models/member');

// save member
exports.saveMember = (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const emailOptIn = req.body.emailOptIn
  let member = new Member();
  member.email = email;
  member.name.first = firstName;
  member.name.last = lastName;
  member.phone = phone;
  member.emailOptIn = emailOptIn;
  member.save()
    .then(() => {
      res.json({ message: 'Member has been added!', data: member });
    });
};
