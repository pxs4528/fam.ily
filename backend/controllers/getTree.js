const Member = require("../models/member");

const getTree = async (req, res) => {
  try {
    let data = [];

    const members = await Member.find({});
    console.log(members);

    for (const item of members) {
      let obj = {
        "id": item.account,
        "gender": "male",
        "img": item.picture,
        "parents": [],
        "children": [],
        "spouses": [],
        "siblings": [],
      };
      if (item.parent.length > 0) {
        for (const parent of item.parent) {
          const parentObj = await Member.findOne({ member_id: parent });
          obj.parents.push({ "id": parentObj.account, "type": "blood" });
        }
      }
      if (item.children.length > 0) {
        for (const child of item.children) {
          const childObj = await Member.findOne({ member_id: child });
          obj.children.push({ "id": childObj.account, "type": "blood" });
        }
      }
      if (item.spouse.length > 0) {
        for (const spouse of item.spouse) {
          const spouseObj = await Member.findOne({ member_id: spouse });
          obj.spouses.push({ "id": spouseObj.account, "type": "marriage" });
        }
      }
      if (item.sibling.length > 0) {
        for (const sibling of item.sibling) {
          const siblingObj = await Member.findOne({ member_id: sibling });
          obj.siblings.push({ "id": siblingObj.account, "type": "blood" });
        }
      }
      data.push(obj);
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};



module.exports = getTree;
