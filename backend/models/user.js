const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    bucket_list: String,
    post: [],
    member_id: Number,
  },
  {
    timestamps: true,
  }
);

//below code succesfully uses bcrypt to hash now just need to dehash stored string when veryfing user



const User = mongoose.model("User", userSchema);

module.exports = User;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   bucket_list: {
//     type: String,
//   },
//   post: [],
//   member_id: {
//     type: Number,
//   },
// });
// const User = mongoose.model("User", userSchema);

// module.exports = User;
