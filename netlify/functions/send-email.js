/* eslint-disable no-undef */
/* eslint-env node */
import nodemailer from 'nodemailer';

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, service, message } = data;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email configuration
    const toAddress = process.env.CONTACT_RECEIVER || process.env.SMTP_USER;
    const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_USER;

    const mailOptions = {
      from: fromAddress,
      to: toAddress,
      subject: `New Contact Form Submission - ${service}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService: ${service}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Phone:</strong> ${phone || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Service:</strong> ${service}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #4F46E5;">Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        ok: false, 
        error: 'Failed to send email',
        details: error.message 
      }),
    };
  }
};
