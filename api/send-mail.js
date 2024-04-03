// /api/send-mail.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    // Prepare serverless function request body for parsing
    const body = req.body ? JSON.parse(req.body) : {};

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Your SMTP server
      port: 587,
      secure: false, // True for 465, false for other ports
      auth: {
        user: 'lorchzach@gmail.com', // Your SMTP username
        pass: 'oslk hpba fdub zzim', // Your SMTP password
      },
    });

    const mailOptions = {
      from: '"Form Submission" <lorchzach@gmail.com>',
      to: 'lorchzach@gmail.com', // Receiver email
      subject: 'New Photo Submission',
      text: `Name: ${body.firstName}\nCaption: ${body.caption}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).send('Email sent successfully');
      }
    });
  } else {
    return res.status(405).send('Method Not Allowed');
  }
};
