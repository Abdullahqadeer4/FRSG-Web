require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form email endpoint
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'f219099@cfd.nu.edu.pk',
    subject: 'Contact Form Submission - FRSG',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Job application email endpoint
app.post('/apply', upload.single('cv'), (req, res) => {
  const { jobTitle, name, email, coverLetter } = req.body;
  const cv = req.file;

  console.log("Received application:", req.body);
  if (cv) {
    console.log("Received file:", cv.originalname);
  } else {
    console.error("No CV file received.");
    return res.status(400).send('CV file is required');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'f219099@cfd.nu.edu.pk',
    subject: `Job Application for ${jobTitle}`,
    text: `Name: ${name}\nEmail: ${email}\nCover Letter: ${coverLetter}`,
    attachments: [
      {
        filename: cv.originalname,
        content: cv.buffer
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Application sent successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});