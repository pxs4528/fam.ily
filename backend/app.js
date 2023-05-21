const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors(), express.json());
app.use(express.urlencoded({ extended: true }));
//import S3 bucket
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile } = require("./controllers/uploadFile");

//cnnect to mongoDB
const dbConnect = require("./controllers/connectMongoDb");
dbConnect();
const Member = require("./models/member");
//import controllers
const { login } = require("./controllers/login");
const signup = require("./controllers/signup");
const pwReset = require("./controllers/pwReset");
const changepw = require("./controllers/changepw");
const addMember = require("./controllers/addmember");
const showTree = require("./controllers/showtree");
const posting = require("./controllers/posting");

const { travelPost, eventPost } = require("./controllers/feedpage");
const getTree = require("./controllers/getTree");
const getPosts = require("./controllers/getPosts");
const bucketlist = require("./controllers/BucketList");
const getEventPost = require("./controllers/getEventPost");
const getTravelPost = require("./controllers/getTravelPost");
const Setting = require("./controllers/setting");

// const user = new User({
//   member_id: "1",
// });

// const member = new Member({
//   member_id: "10",
//   name: "Mik5",
//   age: 35,
//   account: "Mike12345",
// });

// user
//   .save()
//   .then(() => {
//     console.log("saved to mongoDB");
//   })
//   .catch((error) => {
//     console.log("not saved ");
//   });

// member
//   .save()
//   .then(() => {
//     console.log("saved to mongoDB");
//   })
//   .catch((error) => {
//     console.log("not saved ");
//   });
app.get("/bucketlist", bucketlist.getAllBucket);
app.get("/bucketlist/:title", bucketlist.getBucketByTitle);
app.post("/bucketlist/create", bucketlist.createBucket);
app.post("/bucketlist/update/:id", bucketlist.updateBucket);
app.delete("/bucketlist/delete/:id", bucketlist.deleteBucket);
app.post("/changepw", changepw);
app.post("/addmember", addMember);
app.get("/showtree/parent", showTree.parent);
app.get("/showtree/children", showTree.children);
app.get("/showtree/spouse", showTree.spouse);
app.get("/showtree/sibling", showTree.sibling);
app.post("/posting", posting);
app.post("/login", login);

app.post("/feedpage/travel", travelPost);
app.post("/feedpage/event", eventPost);
app.post("/signup", signup);
app.get("/getTree", getTree);
app.get("/getPosts", getPosts);
app.post("/pwReset", pwReset);
app.get("/getPosts/event", getEventPost);
app.get("/getPosts/travel", getTravelPost);
app.post("/setting", Setting);

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);

  // apply filter
  // resize

  const result = await uploadFile(file);
  console.log(result.Location);
  await unlinkFile(file.path);

  res.send(result.Location);
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`listening to port${PORT}`);
});
