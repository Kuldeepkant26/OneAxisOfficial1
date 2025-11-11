/* eslint-disable no-undef */
/* eslint-env node */
import http from 'http';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Render provides PORT, fallback to EMAIL_SERVER_PORT for local dev
const PORT = process.env.PORT || process.env.EMAIL_SERVER_PORT || 5000;

// Log loaded environment variables
console.log('Environment check:');
console.log('- RESEND_API_KEY:', process.env.RESEND_API_KEY ? '***SET***' : 'NOT SET');
console.log('- CONTACT_RECEIVER:', process.env.CONTACT_RECEIVER || 'NOT SET');

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

if (!resend) {
  console.warn('\n[Warning] RESEND_API_KEY not set. Email sending will fail.\n');
}

const sendEmail = async (data) => {
  const { name, email, phone, service, message } = data;
  const toAddress = process.env.CONTACT_RECEIVER || 'oneaxissolutions@gmail.com';
  const fromAddress = process.env.EMAIL_FROM || 'onboarding@resend.dev';

  if (!resend) {
    throw new Error('Resend API key not configured');
  }

  const emailData = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
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
  });

  return emailData;
};

const server = http.createServer((req, res) => {
  // CORS handling - allow requests from your frontend domain
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    process.env.FRONTEND_URL, // Your Render frontend URL
  ].filter(Boolean);

  const origin = req.headers.origin;
  const headers = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  // Health check endpoint
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json', ...headers });
    res.end(JSON.stringify({ 
      status: 'ok', 
      message: 'OneAxis Email API is running',
      endpoint: '/send-email (POST)'
    }));
    return;
  }

  if (req.method === 'POST' && req.url === '/send-email') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        await sendEmail(data);
        res.writeHead(200, { 'Content-Type': 'application/json', ...headers });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        console.error('Error sending email:', err);
        res.writeHead(500, { 'Content-Type': 'application/json', ...headers });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain', ...headers });
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Email server running on port ${PORT}`);
});
