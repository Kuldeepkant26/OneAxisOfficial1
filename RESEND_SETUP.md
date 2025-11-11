# Resend Setup Guide

## Why Resend Instead of SMTP?

✅ **No port blocking** on hosting platforms like Render  
✅ **More reliable** email delivery  
✅ **Better free tier:** 3,000 emails/month, 100/day  
✅ **Simple API** - no complex SMTP configuration  

---

## Setup Steps (5 minutes)

### 1. Create Resend Account

1. Go to: https://resend.com
2. Sign up with your email
3. Verify your email address

### 2. Get API Key

1. Go to: https://resend.com/api-keys
2. Click **"Create API Key"**
3. Name it: `OneAxis Production`
4. Permission: **Sending access**
5. Click **"Add"**
6. **Copy the API key** (starts with `re_...`)

### 3. Update Render Environment Variables

Go to **Render Dashboard** → **oneaxis-9vbh** service → **Environment** tab

**Remove old SMTP variables:**
- ❌ SMTP_HOST
- ❌ SMTP_PORT
- ❌ SMTP_SECURE
- ❌ SMTP_USER
- ❌ SMTP_PASS
- ❌ EMAIL_FROM

**Add new Resend variables:**

```
RESEND_API_KEY=re_your_actual_key_here
CONTACT_RECEIVER=oneaxissolutions@gmail.com
```

Click **"Save Changes"** - service will auto-redeploy.

### 4. Test It!

Once deployed, submit a contact form on your website. You should receive the email at `oneaxissolutions@gmail.com`!

---

## Default Sender Address

By default, emails will be sent from: `onboarding@resend.dev`

### To Use Your Own Domain (Optional)

1. Go to: https://resend.com/domains
2. Click **"Add Domain"**
3. Add your domain (e.g., `oneaxis.com`)
4. Add DNS records as instructed
5. Once verified, update in Render:
   ```
   EMAIL_FROM=noreply@yourdomain.com
   ```

---

## Local Development

Update your `.env` file:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER=oneaxissolutions@gmail.com
EMAIL_FROM=onboarding@resend.dev
EMAIL_SERVER_PORT=5000
```

Then run:
```bash
npm run start:server
```

---

## Troubleshooting

### "API key not configured" error
- Make sure `RESEND_API_KEY` is set in Render environment variables
- API key should start with `re_`

### Not receiving emails
- Check spam folder
- Verify `CONTACT_RECEIVER` email address
- Check Resend dashboard for delivery logs: https://resend.com/emails

### Rate limits
- Free tier: 100 emails/day, 3,000/month
- If you need more, upgrade to paid plan ($20/month for 50,000 emails)

---

## Cost Comparison

| Service | Free Tier | Paid |
|---------|-----------|------|
| **Resend** | 3,000/month, 100/day | $20/month (50k emails) |
| Gmail SMTP | Often blocked on hosting | Free but unreliable |
| SendGrid | 100/day | $20/month (40k emails) |

**Resend is the best choice for your use case!** ✅

---

## Summary

1. ✅ Sign up at resend.com
2. ✅ Get API key
3. ✅ Update Render environment variables
4. ✅ Test contact form
5. 🎉 Emails work reliably!
