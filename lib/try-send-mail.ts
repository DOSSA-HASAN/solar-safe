import { sendMail } from "./SendEmails";// adjust path if needed

async function main() {
  try {
    await sendMail({
      email: "visitor@gmail.com", // pretend visitor email
      subject: "Testing SolarSafe Contact Form",
      message: "Hello, this is a test message from the website form!"
    });
    console.log("✅ Test email sent successfully!");
  } catch (err) {
    console.error("❌ Failed to send test email:", err);
  }
}

main();
