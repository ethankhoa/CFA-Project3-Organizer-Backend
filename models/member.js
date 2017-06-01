const mongoose = require('mongoose');

const { Schema } = mongoose;

const MemberSchema = new Schema ({
  name: {
    first: {
      type: String,
      trim: true
    },
    last: {
      type: String,
      trim: true
    }
        },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  emailOptIn: {
    type: Boolean,
    default: false
  }
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
