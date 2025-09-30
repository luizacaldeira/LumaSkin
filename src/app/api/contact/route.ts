import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Loaded' : 'Not loaded');

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        console.log('📋 Dados recebidos:', { name, email, subject, message });

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "luizaccaldeiradaniel@gmail.com",
            subject,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            replyTo: email,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}