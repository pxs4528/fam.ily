const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  post_id: {
    type: Number,
  },
  caption: {
    type: String,
  },
  picture: {
    type: String,
  },
  location_long: {
    type: Number,
  },
  location_lat: {
    type: Number,
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
