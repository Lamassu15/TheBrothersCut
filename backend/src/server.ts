import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { render } from "@react-email/render";
import Email from "./emails/BookingEmail";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  try {
    const { firstName, lastName, email, service, date, time, message } =
      req.body;

    const emailHtml = await render(
      Email({ firstName, lastName, email, service, date, time, message })
    );

    const response = await resend.emails.send({
      from: "info@gabara.se",
      to: email,
      replyTo: email,
      // bcc: "barbers@email.com",
      subject: "Booking Confirmation",
      html: emailHtml,
    });

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, error });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
