const Member = require("../models/member");
const User = require("../models/user");
const mongoose = require("mongoose");

const signUp = async (req, res) => {
  //user input
  const { username, password, email, firstName, lastName, age } = req.body;
  console.log(username);
  const bucket_list = "";
  const post = [];

  let member_id;
  let is_exist = false;
  do {
    member_id = Math.floor(Math.random() * 1000); // a random number from 0 to 999
    Member.findOne({ member_id: member_id }).then((check) => {
      if (check != null) {
        console.log("member_id already exits");
        is_exist = true;
      }
    });
  } while (is_exist);

  let exitCondition = 0;

  const new_User = new User({
    username: username,
    password: password,
    email: email,
    bucket_list: bucket_list,
    post: post,
    member_id: member_id,
  });

  const new_Member = new Member({
    member_id: member_id,
    name: firstName + " " + lastName,
    age: age,
    picture:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    account: username,
    parent: [],
    children: [],
    sibling: [],
    spouse: [],
  });

  console.log(new_User);

  User.exists({ username: username }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      console.log("no?");
    } else {
      console.log(result);
      console.log("yes?");
    }
  });

  User.create(new_User, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });

  Member.create(new_Member, (err, member) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
  console.log("It made it all the way cuhhhh");
};

module.exports = signUp;
