import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      { name, email, message },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    if (result.status === 200) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  } catch (error) {
    console.error("EmailJS Error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong while sending" },
      { status: 500 }
    );
  }
}
