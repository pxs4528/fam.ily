const Post = require("../models/posts");

const getEventPost = (req, res) => {
  let arr = [];

  Post.find({ type: "event" })
    .then((result) => {
      console.log(result);
      res.send(result);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};
module.exports = getEventPost;