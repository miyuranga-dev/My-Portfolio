import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

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

    const { data, error } = await resend.emails.send({
      // Must be a verified domain in Resend, or use their default
      // onboarding@resend.dev sender until you verify your own domain.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || "Portfolio Inquiry",
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Portfolio Contact</title>
</head>

<body style="margin:0;padding:40px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="700" cellpadding="0" cellspacing="0"
style="
background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 15px 50px rgba(0,0,0,.08);
">

<!-- Header -->

<tr>
<td
style="
background:linear-gradient(135deg,#0f172a,#111827);
padding:45px;
text-align:center;
">

<div
style="
display:inline-block;
padding:10px 20px;
background:rgba(16,185,129,.15);
border:1px solid rgba(16,185,129,.3);
border-radius:999px;
color:#10b981;
font-size:13px;
font-weight:700;
letter-spacing:1px;
">
NEW PORTFOLIO INQUIRY
</div>

<h1
style="
margin:25px 0 10px;
font-size:34px;
color:#ffffff;
font-weight:800;
">
Prabodana Miyuranga
</h1>

<p
style="
margin:0;
font-size:16px;
color:#cbd5e1;
">
Someone contacted you through your portfolio website.
</p>

</td>
</tr>

<!-- Body -->

<tr>
<td style="padding:40px;">

<h2
style="
margin-top:0;
font-size:24px;
color:#111827;
">
Contact Details
</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
margin-top:25px;
border-collapse:separate;
border-spacing:0 15px;
">

<tr>

<td width="170"
style="
color:#6b7280;
font-weight:700;
">
👤 Name
</td>

<td
style="
background:#f9fafb;
padding:14px 18px;
border-radius:10px;
color:#111827;
font-weight:600;
">
${name}
</td>

</tr>

<tr>

<td
style="
color:#6b7280;
font-weight:700;
">
📧 Email
</td>

<td
style="
background:#f9fafb;
padding:14px 18px;
border-radius:10px;
">
<a
href="mailto:${email}"
style="
color:#10b981;
text-decoration:none;
font-weight:700;
">
${email}
</a>
</td>

</tr>

<tr>

<td
style="
color:#6b7280;
font-weight:700;
">
📱 Phone
</td>

<td
style="
background:#f9fafb;
padding:14px 18px;
border-radius:10px;
font-weight:600;
">
${mobile || "Not Provided"}
</td>

</tr>

<tr>

<td
style="
color:#6b7280;
font-weight:700;
">
💼 Subject
</td>

<td
style="
background:#f9fafb;
padding:14px 18px;
border-radius:10px;
font-weight:600;
">
${subject}
</td>

</tr>

</table>

<div
style="
margin-top:45px;
">

<h2
style="
margin-bottom:15px;
color:#111827;
">
Message
</h2>

<div
style="
padding:25px;
background:#f9fafb;
border-left:5px solid #10b981;
border-radius:12px;
font-size:16px;
line-height:1.8;
color:#374151;
">
${message.replace(/\n/g, "<br/>")}
</div>

</div>

<div
style="
margin-top:40px;
padding:25px;
background:#ecfdf5;
border:1px solid #a7f3d0;
border-radius:12px;
">

<h3
style="
margin-top:0;
color:#065f46;
">
Quick Actions
</h3>

<p style="margin:8px 0;">
Reply:
<a
href="mailto:${email}"
style="color:#059669;font-weight:bold;text-decoration:none;"
>
${email}
</a>
</p>

${
  mobile
    ? `
<p style="margin:8px 0;">
Call:
<a
href="tel:${mobile}"
style="color:#059669;font-weight:bold;text-decoration:none;"
>
${mobile}
</a>
</p>
`
    : ""
}

</div>

</td>
</tr>

<!-- Footer -->

<tr>
<td
style="
background:#111827;
padding:30px;
text-align:center;
">

<h3
style="
margin:0;
color:#ffffff;
">
Portfolio Contact System
</h3>

<p
style="
margin-top:10px;
color:#9ca3af;
font-size:14px;
">
Automatically generated from your portfolio website.
</p>

<p
style="
margin-top:25px;
color:#10b981;
font-size:13px;
font-weight:bold;
">
© ${new Date().getFullYear()} Prabodana Miyuranga
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });

    if (error) {
      console.error("❌ Resend Error:", error);
      return res.status(500).json({
        success: false,
        message: "Email failed to send.",
      });
    }

    res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error("❌ Unexpected Error:", err);

    res.status(500).json({
      success: false,
      message: "Email failed to send.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});