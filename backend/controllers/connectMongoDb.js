const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((error) => {
      console.log("Unable to connect to mongoDB");
      console.log(error);
    });
}
module.exports = dbConnect;
