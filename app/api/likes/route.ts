import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the POST method handler
export async function POST(req: NextRequest) {
  // Set up the email transporter
  let transporter = nodemailer.createTransport({
    service: "Aol",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "chase@blitworx.com",
    subject: "NEW LIKE CAME IN",
    text: "Hey there, someone liked your page",
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ message: "Like received, email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
