/* eslint-disable no-undef */
/* eslint-env node */
import http from 'http';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Render provides PORT, fallback to EMAIL_SERVER_PORT for local dev
const PORT = process.env.PORT || process.env.EMAIL_SERVER_PORT || 5000;

// Basic config check to help developers diagnose missing SMTP settings quickly
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn('\n[Warning] SMTP configuration appears incomplete.\n' +
    'Please create a .env file (copy .env.example) and set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS.\n' +
    'Until these are provided, the server will not be able to connect to an SMTP provider and sending will fail.\n');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  } : undefined,
});

transporter.verify()
  .then(() => console.log('Nodemailer transporter is ready'))
  .catch((err) => console.warn('Nodemailer verify failed (check SMTP settings):', err.message || err));

const sendEmail = async (data) => {
  const { name, email, phone, service, message } = data;
  const toAddress = process.env.CONTACT_RECEIVER || 'puneetverma2425@gmail.com';
  const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_USER || `no-reply@localhost`;

  const mailOptions = {
    from: fromAddress,
    to: toAddress,
    subject: `New contact form submission - ${service || 'General Inquiry'}`,
    text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    html: `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `
  };

  return transporter.sendMail(mailOptions);
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
