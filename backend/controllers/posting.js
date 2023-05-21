const Member = require("../models/member");
const User = require("../models/user");
const Post = require("../models/posts");

const posting = (req, res) => {
  let request = req.body;
  let member_id = request.member_id;
  let caption = request.caption;
  let pic = request.picture;
  let coords = [request.location_long, request.location_lat];
  let type = request.type;
  let date = request.date;
  let is_exist = false;

  if (is_exist != true) {
    do {
      post_id = Math.floor(Math.random() * 1000); // a random number from 0 to 999
      Post.findOne({ post_id: post_id }).then((check) => {
        console.log(post_id);
        if (check != null) {
          console.log("post_id already exits");
          is_exist = true;
        }
      });
    } while (is_exist);
  }

  let newPost = new Post({
    post_id: post_id,
    caption: caption,
    picture: pic,
    location_long: coords[0],
    location_lat: coords[1],
    type: type,
    date: date,
  });

  newPost.save().then((result) => {
    // look for member_id in user collection and add to post array

    User.findOne({ member_id: member_id }).then((result) => {
      console.log(result);
      result.post.push(post_id);
      result.save();
      res.json(newPost);
    });
  });
  //   res.json(newPost);
};

module.exports = posting;