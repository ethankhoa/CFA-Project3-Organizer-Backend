const mongoose = require('mongoose');

const Member = require('../models/member');

// save members
exports.saveMember = (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const emailOptIn = req.body.emailOptIn;
  const isMember = req.body.isMember;
  let member = new Member();
  member.email = email;
  member.name.first = firstName;
  member.name.last = lastName;
  member.phone = phone;
  member.emailOptIn = emailOptIn;
  member.isMember = isMember;
  member.save()
    .then(() => {
      res.json({ message: 'Member has been added!', data: member });
    });
};

// get members
exports.getMembers = (req, res) => {
  Member.find()
    .then(members => {
      res.json(members)
    })
};

// get one member
exports.getOneMember = (req, res) => {
  Member.findOne({ _id: req.params.id })
    .then(member => {
      res.json(member)
    })
};

exports.deleteMember = (req, res) => {
  Member.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.json({ message: 'Member has been deleted.'})
    })
};

exports.editMember = (req, res) => {
  Member.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(() => {
      res.json({ message: 'Member has been updated.' });
    });
};
