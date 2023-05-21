const Post = require("../models/posts");

const getTravelPost = (req, res) => {
  let arr = [];

  Post.find({ type: "travel" })
    .then((result) => {
      console.log(result);
      res.send(result);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};
module.exports = getTravelPost;