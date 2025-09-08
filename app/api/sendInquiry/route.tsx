import { NextResponse } from "next/server";

import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const { name, email, subject, message, phone, type } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.solarsafe-solutions.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    // Construct body dynamically
    let body = `
      New ${type || "Message"} received:

      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ""}
      
      Message:
      ${message}
    `;

    await transporter.sendMail({
      from: `"SolarSafe Website" <sales@solarsafe-solutions.com>`,
      to: "sales@solarsafe-solutions.com",
      subject: subject || `New ${type || "Message"} from Website`,
      text: body,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error sending mail:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
