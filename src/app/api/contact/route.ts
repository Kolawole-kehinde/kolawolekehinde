import { NextResponse } from "next/server";
import { getResend } from "@/src/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [process.env.EMAIL_TO!],
      replyTo: email,
      subject: `📩 New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
