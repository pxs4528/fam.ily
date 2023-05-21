const User = require("../models/user");
const mongoose = require("mongoose");

const changepw = async (req, res) => {
  const { newPassword, email } = req.body;
  console.log(newPassword);
  console.log("ehello");
  console.log(email);
  console.log("ehello after ");
  User.updateOne(
    { email: email },
    { $set: { password: newPassword } },
    function (err, pw) {
      if (err) {
        console.log("Error updating PW");
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send();
      }
    }
  );
  User.find({ email: email }, (err, userData) => {
    console.log(userData);
  });
};

module.exports = changepw;
