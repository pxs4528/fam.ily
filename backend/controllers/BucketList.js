//bucket list controller
const Bucket = require("../models/bucketModel.js");

const bucketlist = {
  //get all bucket list
  getAllBucket: (req, res) => {
    Bucket.find(req)
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  //get bucket list by title
  getBucketByTitle: (req, res) => {
    let title = req.params.title;
    Bucket.findOne({ title: title })
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  //create new bucket list
  createBucket: (req, res) => {
    let bucket = new Bucket({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      picture: req.body.picture,
    });
    bucket
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  //update bucket list
  updateBucket: (req, res) => {
    let id = req.params.id;
    Bucket.findOneAndUpdate(
      { _id: id },
      {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
      },
      { new: true }
    )
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  //delete bucket list
  deleteBucket: (req, res) => {
    let id = req.params.id;
    Bucket.findOneAndDelete({ _id: id })
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

module.exports = bucketlist;
