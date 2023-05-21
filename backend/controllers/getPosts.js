const Post = require("../models/posts");

const getPost = (req, res) => {
  let arr = [];

  Post.find({})
    .then((result) => {
      console.log(result);
      res.send(result);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};
module.exports = getPost;
