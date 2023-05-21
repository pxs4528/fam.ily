const User = require("../models/user");

const nodeMailer = require("nodemailer");

const mongoose = require("mongoose");

const sendEmail = async () => {
  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: "your email",
        pass: "your password",
      },
    });

    await transporter.sendMail({
      from: "your email",
      to: userEmail,
      subject: "Reset your password",
      html: '<a href="http://localhost:3000/reset-password">Click this totally not suspicious link to reset your password!</a>',
    });
    //console.log(email);
    console.log("Email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};
let userEmail = "";

const pwReset = (req, res) => {
  const email = req.body.email;
  console.log(email);
  userEmail = email;
  //console.log(typeof userEmail);
  User.findOne({ email: userEmail }, (err, Data) => {
    if (err) {
      console.log(err);
      console.log("internal server error");
      res.status(500).send();
    }
    if (!Data) {
      console.log("Email doesnt exist");
      res.status(404).send();
    } else {
      //send the actual email and use nodemailer
      //console.log(typeof userEmail);
      sendEmail();
      //console.log("Email sent succesfully!");
      res.status(200).send();
      //res.json({message: "Email sent succesfully!"})
    }
  });
};

module.exports = pwReset;
