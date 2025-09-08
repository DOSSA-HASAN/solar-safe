import nodemailer from "nodemailer";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export async function sendMail({ email, subject, message }: ContactFormData) {
  // 1. Create transporter
  const transporter = nodemailer.createTransport({
    host: "mail.solarsafe-solutions.com", // Your domain mail server
    port: 465,                            // 465 (SSL) or 587 (TLS)
    secure: true,                         // true for 465, false for 587
    auth: {
      user: "info@solarsafe-solutions.com",  // Your mailbox
      pass: process.env.EMAIL_PASS as string // Password (env var)
    }
  });

  try {
    // 2. Send email
    const info = await transporter.sendMail({
      from: `"SolarSafe Website" <info@solarsafe-solutions.com>`, // shows as sent from your domain
      to: "info@solarsafe-solutions.com",                        // you receive it here
      subject: subject,                                          // visitor’s subject
      text: message,                                             // visitor’s message
      replyTo: email                                             // so you can reply to visitor directly
    });

    console.log("✅ Message sent: %s", info.messageId);
  } catch (err) {
    console.error("❌ Error sending mail:", err);
    throw err;
  }
}
