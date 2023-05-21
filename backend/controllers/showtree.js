const Member = require("../models/member");

const parent = (req, res) => {
  let member_id = req.body.member_id;
  let parent_id = [];
  let parent_data = [];

  Member.findOne({ member_id: member_id })
    .then((result) => {
      parent_id = result.relationship.parent.slice();
      return Promise.all(
        parent_id.map((id) => Member.findOne({ member_id: id }))
      );
    })
    .then((results) => {
      parent_data = results;
      res.json(parent_data);
    })
    .catch((e) => {
      console.log("can not find member_id ");
      console.log(e);
    });
};

const children = (req, res) => {
  let member_id = req.body.member_id;
  let children_id = [];
  let children_data = [];

  Member.findOne({ member_id: member_id })
    .then((result) => {
      children_id = result.relationship.children.slice();
      return Promise.all(
        children_id.map((id) => Member.findOne({ member_id: id }))
      );
    })
    .then((results) => {
      children_data = results;
      res.json(children_data);
    })
    .catch((e) => {
      console.log("can not find member_id ");
      console.log(e);
    });
};
const sibling = (req, res) => {
  let member_id = req.body.member_id;
  let sibling_id = [];
  let sibling_data = [];

  Member.findOne({ member_id: member_id })
    .then((result) => {
      sibling_id = result.relationship.sibling.slice();
      return Promise.all(
        sibling_id.map((id) => Member.findOne({ member_id: id }))
      );
    })
    .then((results) => {
      sibling_data = results;
      res.json(sibling_data);
    })
    .catch((e) => {
      console.log("can not find member_id ");
      console.log(e);
    });
};
const spouse = (req, res) => {
  let member_id = req.body.member_id;
  let spouse_id = [];
  let spouse_data = [];

  Member.findOne({ member_id: member_id })
    .then((result) => {
      spouse_id = result.relationship.spouse.slice();
      return Promise.all(
        spouse_id.map((id) => Member.findOne({ member_id: id }))
      );
    })
    .then((results) => {
      spouse_data = results;
      res.json(spouse_data);
    })
    .catch((e) => {
      console.log("can not find member_id ");
      console.log(e);
    });
};

module.exports = { parent, children, sibling, spouse };
