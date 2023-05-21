const Member = require("../models/member");
const addMember = (req, res) => {
  let request = req.body;
  let node_member_id = request.member_id;
  let member_id;
  let is_exist = false;
  do {
    member_id = Math.floor(Math.random() * 1000); // a random number from 0 to 999
    Member.findOne({ member_id: member_id }).then((check) => {
      if (check != null) {
        console.log("member_id already exits");
        is_exist = true;
      }
    });
  } while (is_exist);

  const new_member = new Member({
    member_id: member_id,
    name: request.name,
    age: request.age,
    picture: request.picture,
    account: request.account,
  });
  new_member
    .save()
    .then(() => {
      console.log("new member is saved");
      if (request.relationship == "parent") {
        parent();
      } else if (request.relationship == "children") {
        children();
      } else if (request.relationship == "sibling") {
        sibling();
      } else {
        spouse();
      }
    })
    .catch((e) => {
      console.log("new member was not saved");
      console.log(e);
    });

  const parent = async () => {
    try {
      //update existing relatioship with new parent
      let parent = [];
      const result1 = await Member.findOne({ member_id: node_member_id });
      parent = result1.parent.slice();
      console.log(parent.length);

      if (parent.length != 0) {
        console.log("helloo");
        for (let i = 0; i < parent.length; i++) {
          const updatedMember1 = await Member.findOneAndUpdate(
            { member_id: parent[i] },
            { $push: { spouse: member_id } },
            { new: true }
          );
          console.log(updatedMember1);

          const updatedMember2 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { spouse: parent[i] } },
            { new: true }
          );
          console.log(updatedMember2);
        }
      }

      let sibling = [];
      const result2 = await Member.findOne({ member_id: node_member_id });
      sibling = result2.sibling.slice();
      console.log(sibling);

      if (sibling.length != 0) {
        for (let i = 0; i < sibling.length; i++) {
          const updatedMember3 = await Member.findOneAndUpdate(
            { member_id: sibling[i] },
            { $push: { parent: member_id } },
            { new: true }
          );
          console.log(updatedMember3);

          const updatedMember4 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { children: sibling[i] } },
            { new: true }
          );
          console.log(updatedMember4);
        }
      }

      //update parent in child data
      const updatedMember5 = await Member.findOneAndUpdate(
        { member_id: node_member_id },
        { $push: { parent: member_id } },
        { new: true }
      );
      console.log(updatedMember5);

      //update child in the parent data
      const updatedMember6 = await Member.findOneAndUpdate(
        { member_id: member_id },
        { $push: { children: node_member_id } },
        { new: true }
      );
      console.log(updatedMember6);

      //res.send("add member");
    } catch (err) {
      console.error(err);
    }
  };

  const children = async () => {
    try {
      //update existing relatioship with new parent
      let spouse = [];
      const result1 = await Member.findOne({ member_id: node_member_id });
      spouse = result1.spouse.slice();
      console.log(spouse.length);

      if (spouse.length != 0) {
        console.log("helloo");
        for (let i = 0; i < spouse.length; i++) {
          const updatedMember1 = await Member.findOneAndUpdate(
            { member_id: spouse[i] },
            { $push: { children: member_id } },
            { new: true }
          );
          console.log(updatedMember1);

          const updatedMember2 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { parent: spouse[i] } },
            { new: true }
          );
          console.log(updatedMember2);
        }
      }

      let children = [];
      const result2 = await Member.findOne({ member_id: node_member_id });
      children = result2.children.slice();
      console.log(children);

      if (children.length != 0) {
        for (let i = 0; i < children.length; i++) {
          const updatedMember3 = await Member.findOneAndUpdate(
            { member_id: children[i] },
            { $push: { sibling: member_id } },
            { new: true }
          );
          console.log(updatedMember3);

          const updatedMember4 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { sibling: children[i] } },
            { new: true }
          );
          console.log(updatedMember4);
        }
      }

      //update parent in child data
      const updatedMember5 = await Member.findOneAndUpdate(
        { member_id: node_member_id },
        { $push: { children: member_id } },
        { new: true }
      );
      console.log(updatedMember5);

      //update child in the parent data
      const updatedMember6 = await Member.findOneAndUpdate(
        { member_id: member_id },
        { $push: { parent: node_member_id } },
        { new: true }
      );
      console.log(updatedMember6);

      //res.send("add member");
    } catch (err) {
      console.error(err);
    }
  };

  const sibling = async () => {
    try {
      //update existing relatioship with new parent
      let parent = [];
      const result1 = await Member.findOne({ member_id: node_member_id });
      parent = result1.parent.slice();
      console.log(parent.length);

      if (parent.length != 0) {
        console.log("helloo");
        for (let i = 0; i < parent.length; i++) {
          const updatedMember1 = await Member.findOneAndUpdate(
            { member_id: parent[i] },
            { $push: { children: member_id } },
            { new: true }
          );
          console.log(updatedMember1);

          const updatedMember2 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { parent: parent[i] } },
            { new: true }
          );
          console.log(updatedMember2);
        }
      }

      let sibling = [];
      const result2 = await Member.findOne({ member_id: node_member_id });
      sibling = result2.sibling.slice();
      console.log(sibling);

      if (sibling.length != 0) {
        for (let i = 0; i < sibling.length; i++) {
          const updatedMember3 = await Member.findOneAndUpdate(
            { member_id: sibling[i] },
            { $push: { sibling: member_id } },
            { new: true }
          );
          console.log(updatedMember3);

          const updatedMember4 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { sibling: sibling[i] } },
            { new: true }
          );
          console.log(updatedMember4);
        }
      }

      const updatedMember5 = await Member.findOneAndUpdate(
        { member_id: node_member_id },
        { $push: { sibling: member_id } },
        { new: true }
      );
      console.log(updatedMember5);

      const updatedMember6 = await Member.findOneAndUpdate(
        { member_id: member_id },
        { $push: { sibling: node_member_id } },
        { new: true }
      );
      console.log(updatedMember6);
    } catch (err) {
      console.error(err);
    }
  };

  const spouse = async () => {
    try {
      //update existing relatioship with new parent
      let children = [];
      const result1 = await Member.findOne({ member_id: node_member_id });
      children = result1.children.slice();
      console.log(children.length);

      if (children.length != 0) {
        console.log("helloo");
        for (let i = 0; i < children.length; i++) {
          const updatedMember1 = await Member.findOneAndUpdate(
            { member_id: children[i] },
            { $push: { parent: member_id } },
            { new: true }
          );
          console.log(updatedMember1);

          const updatedMember2 = await Member.findOneAndUpdate(
            { member_id: member_id },
            { $push: { children: children[i] } },
            { new: true }
          );
          console.log(updatedMember2);
        }
      }

      //update parent in child data
      const updatedMember3 = await Member.findOneAndUpdate(
        { member_id: node_member_id },
        { $push: { spouse: member_id } },
        { new: true }
      );
      console.log(updatedMember3);

      //update child in the parent data
      const updatedMember4 = await Member.findOneAndUpdate(
        { member_id: member_id },
        { $push: { spouse: node_member_id } },
        { new: true }
      );
      console.log(updatedMember4);
    } catch (err) {
      console.error(err);
    }
  };

  res.send("add member");
};

module.exports = addMember;