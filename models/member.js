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
    type: String
  },
  timestamps: {
    type: Date
  }
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
