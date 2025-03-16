const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, phone, members, checkIn, checkOut } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.SENT_USER,
    subject: 'New Room Booking Request',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Number of Members: ${members}
      Check-in Date: ${checkIn}
      Check-out Date: ${checkOut}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;