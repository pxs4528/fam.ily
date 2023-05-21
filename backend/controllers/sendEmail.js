const nodeMailer = require("nodemailer");

const sendEmail = async (email) => {
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
      to: email,
      subject: "Reset your password",
      html: '<a href="http://localhost:3000/reset-password">Click this totally not suspicious link to reset your password!</a>',
    });
    console.log(email);
    console.log("Email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
