const Member = require("../models/member");

const Setting = (req, res) => {
  let member_id = req.body.member_id;
  let name = req.body.name;
  let age = req.body.age;
  let picture = req.body.picture;

  Member.findOneAndUpdate(
    { member_id: member_id },
    { $set: { name: name, age: age, picture: picture } },
    { new: true }
  )
    .then((updatedMember) => {
      console.log(updatedMember);
      res.json(updatedMember);
    })
    .catch((err) => console.error(err));
};

// const profileGet = (req, res) => {
//   let member_id = req.body.member_id;
//   //   let name = req.body.name;
//   //   let age = req.body.age;

//   //   let picture = req.body.picture;

//   Member.findById(member_id).then((result) => {
//     console.log(result);
//     res.json(result);
//   });
// };

module.exports = Setting;
