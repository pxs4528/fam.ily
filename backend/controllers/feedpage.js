const User = require("../models/user");
const Post = require("../models/posts");
const mongoose = require("mongoose");

const travelPost = (req, res) => {
  let member_id = req.body.member_id;
  // find all posts that have the same member_id
  User.findOne({ member_id: member_id })
    .then((result) => {
      console.log(result);
      let post_id = result.post;
      return Promise.all(post_id.map((id) => Post.findOne({ post_id: id })));
    })
    .then((results) => {
      // check all posts that are of type travel
      let travel_post = [];
      results.forEach((post) => {
        if (post.type == "travel") travel_post.push(post);
      });

      res.json(travel_post);
    })
    .catch((e) => {
      console.log("can not find member_id ");
      console.log(e);
    });
};

const eventPost = (req, res) => {
  let member_id = req.body.member_id;
  // find all posts that have the same member_id
  User.findOne({ member_id: member_id })
    .then((result) => {
      console.log(result);
      let post_id = result.post;
      return Promise.all(post_id.map((id) => Post.findOne({ post_id: id })));
    })
    .then((results) => {
      // check all posts that are of type event
      let event_post = [];
      results.forEach((post) => {
        if (post.type == "event") event_post.push(post);
      });
      res.json(event_post);
    })
    .catch((e) => {
      console.log("can not find member_id ");
      console.log(e);
    });
};

module.exports = { travelPost, eventPost };
