const express=require('express')
const mongoose =require('mongoose')
const cors = require('cors'); 
const app=express();
const nodemailer = require("nodemailer");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // fallback for development
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true // if you're using cookies or sessions
  }));
// POST route
app.post("/formdata", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",   // replace with your Gmail
        pass: "your-app-password",      // use App Password (not your real password)
      },
    });

    // Email options
    const mailOptions = {
      from: email, // sender's email (from form)
      to: "eicell@nitandhra.ac.in", // ✅ your destination email
      subject: subject || "New Contact Form Submission",
      text: `
        You have a new contact form submission:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

 app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });