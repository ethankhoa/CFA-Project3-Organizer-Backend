const mongoose = require('mongoose');

const { Schema } = mongoose;

const MemberSchema = new Schema ({
  name: {
    title: {
      type: String,
      trim: true
    }
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
  updated: {
    type: Date,
  },
  emailOptIn: {
    type: Boolean,
    default: false
  },
  isMember: {
    type: Boolean,
    default: false
  },
  address: {
    street: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    postCode: {
      type: String,
      trim: true
    }
  },
    birthday: {
      day: {
        type: Number,
        min: 1,
        max: 31
      },
      month: {
        type: Number,
        min: 1,
        max: 12
      },
      year: {
        type: Number
      }
    }
  });

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
