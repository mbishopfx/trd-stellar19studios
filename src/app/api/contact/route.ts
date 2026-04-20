import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // Validate env variables
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    if (!user || !pass) {
      console.warn("Gmail credentials not set. SMTP aborted.");
      return NextResponse.json({ message: "Lead saved but email not sent" }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const mailOptions = {
      from: user,
      to: "miles21media@gmail.com",
      cc: "info@stellar19studios.com",
      subject: `NEW LEAD: ${name} - ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #000; color: #fff; border: 2px solid #FF007F;">
          <h2 style="color: #FF007F; font-style: italic;">NEW STELLAR19 LEAD</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <div style="margin-top: 20px; border-top: 1px solid #333; padding-top: 10px;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div style="margin-top: 20px; font-size: 10px; color: #666;">
            STELLAR19 STUDIOS INBOUND SIGNAL
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Signal transmitted successfully" });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
