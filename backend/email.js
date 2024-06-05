const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "batyr.ashim2022@gmail.com",
      pass: "cfvg poam cpmn aeon",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "batyr.ashim2022@gmail.com",
    to: "batyrashim058@gmail.com",
    subject: `kaztravel`,
    text: `Hello, this message is generated automatically from the website kazTravel.kz.

    Requested demo access

    You do not need to reply to the message    `,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending email");
    } else {
      res.send("Success");
    }
  });
});

module.exports = router;
