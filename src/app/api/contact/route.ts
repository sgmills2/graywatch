import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: Request) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing email configuration');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, company, message } = body as ContactFormData;

    console.log('Received form submission:', { name, email, company });

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log('Created transporter with user:', process.env.GMAIL_USER);

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sgmills2@gmail.com',
      replyTo: email,
      subject: `[Graywatch Contact] ${name}`,
      text: `
New contact form submission from graywatch.ai:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p>From graywatch.ai contact form:</p>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || 'Not provided'}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Attempting to send email...');

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log the full error details
    const err = error as Error;
    console.error('Detailed error in contact form:', {
      message: err.message,
      stack: err.stack,
      name: err.name,
      // Additional nodemailer specific error properties
      ...(error as any)?.code && { code: (error as any).code },
      ...(error as any)?.command && { command: (error as any).command },
    });

    return NextResponse.json(
      { error: 'Failed to send message', details: err.message },
      { status: 500 }
    );
  }
} 