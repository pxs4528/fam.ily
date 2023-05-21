const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  member_id: {
    type: Number,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  picture: {
    type: String,
  },
  account: {
    type: String,
  },

  parent: [], // array of member_id
  children: [],
  sibling: [],
  spouse: [],
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
