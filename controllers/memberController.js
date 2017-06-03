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
  const street = req.body.street;
  const state = req.body.state;
  const postCode = req.body.postCode;
  const city = req.body.city;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;

  let member = new Member();
  member.email = email;
  member.name.first = firstName;
  member.name.last = lastName;
  member.address.street = street;
  member.address.city = city;
  member.address.state = state;
  member.address.postCode = postCode;
  member.phone = phone;
  member.emailOptIn = emailOptIn;
  member.isMember = isMember;
  member.birthday.month = month;
  member.birthday.day = day;
  member.birthday.year = year;
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
