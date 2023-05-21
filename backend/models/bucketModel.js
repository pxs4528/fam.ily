//bucket list model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketSchema = new Schema({
  title: String,
  description: String,
  location: String,
  picture: String,
});

const Bucket = mongoose.model("Bucket", bucketSchema);
module.exports = Bucket;
