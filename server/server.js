import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// =========================
// Nodemailer Transporter
// =========================

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Failed");
    console.error(error);
  } else {
    console.log("✅ SMTP Server Ready");
  }
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Contact API Running 🚀",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || "Portfolio Inquiry",

      html: `
        <!-- YOUR EXISTING HTML EMAIL HERE -->
      `,
    });

    console.log(`✅ New inquiry received from ${name} (${email})`);

    res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error("❌ Email Error");
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});