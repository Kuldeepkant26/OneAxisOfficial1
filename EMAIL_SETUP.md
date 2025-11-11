# Email Configuration Setup

## Environment Variables Required

Your application needs the following environment variables to send emails:

```env
# SMTP settings (use your provider's SMTP server)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=oneaxissolutions@gmail.com
SMTP_PASS=scujxxksdygfqzud

# From address used in the email
EMAIL_FROM=no-reply@yourdomain.com

# Email that should receive contact form submissions
CONTACT_RECEIVER=oneaxissolutions@gmail.com

# Port the local email server will listen on (only for local development)
EMAIL_SERVER_PORT=5000
```

## Local Development Setup

1. **Copy the `.env` file** (already created in your project root)
2. **Start the local email server**:
   ```bash
   npm run start:server
   ```
3. **In a separate terminal, start the dev server**:
   ```bash
   npm run dev
   ```

The contact form will use `http://localhost:5000/send-email` in development.

## Production Deployment (Netlify)

### Step 1: Set Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:

   | Variable Name | Value |
   |--------------|-------|
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_SECURE` | `false` |
   | `SMTP_USER` | `oneaxissolutions@gmail.com` |
   | `SMTP_PASS` | `scujxxksdygfqzud` |
   | `EMAIL_FROM` | `no-reply@yourdomain.com` |
   | `CONTACT_RECEIVER` | `oneaxissolutions@gmail.com` |

   > **Note**: Do NOT add `EMAIL_SERVER_PORT` to Netlify - it's only for local development.

### Step 2: Deploy

The application will automatically use the Netlify serverless function `/.netlify/functions/send-email` in production.

```bash
# Build and deploy
npm run build

# Or if using Netlify CLI
netlify deploy --prod
```

## How It Works

- **Local Development**: Uses Node.js server (`server.js`) on port 5000
- **Production**: Uses Netlify serverless function (`netlify/functions/send-email.js`)
- **Auto-detection**: The app automatically detects the environment and uses the correct endpoint

## Troubleshooting

### Gmail App Password Issues

If you're using Gmail, you need an **App Password** (not your regular password):

1. Enable 2-Factor Authentication on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate a new app password for "Mail"
4. Use that 16-character password as `SMTP_PASS`

### Test Email Sending

You can test the serverless function locally using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run dev server with functions
netlify dev
```

This will run both your Vite app and serverless functions locally.

## Security Notes

- ✅ Environment variables are kept secure and not committed to Git
- ✅ SMTP credentials are only accessible server-side (in serverless functions)
- ✅ No credentials are exposed to the browser
- ⚠️ Make sure `.env` is in your `.gitignore` file

## Files Modified/Created

1. `netlify/functions/send-email.js` - Serverless function for production
2. `src/components/ContactModal.jsx` - Updated to detect environment
3. `netlify.toml` - Netlify configuration
4. `.env` - Local environment variables (DO NOT COMMIT)

---

**After deploying**, your contact form will work in production! 🎉
