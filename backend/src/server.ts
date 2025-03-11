import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const resend = new Resend(process.env.RESEND_API_KEY);


app.post("/send-booking", async (req, res) => {
  const { firstName, lastName, email, service, date, time, message } = req.body;


  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Booking Confirmation for ${service}`,
      html: `<p>Hello ${firstName} ${lastName},</p>
        <p>Your booking for ${service} on ${date} at ${time} is confirmed.</p>
             <p>Message: ${message}</p>`,
    });


    res.json({ success: true, message: "Email sent" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});


app.listen(5000, () => console.log("Server running on http://localhost:5000"));