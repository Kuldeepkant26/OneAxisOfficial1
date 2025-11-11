# Deploying to Render

This guide will help you deploy your OneAxis application to Render with email functionality.

## Overview

Your application will be deployed as **2 services**:
1. **Static Site** - Frontend (React/Vite app)
2. **Web Service** - Backend API (Email server)

## Quick Deploy Steps

### 1. Push to GitHub (Already Done ✅)

Your code is already on GitHub at: https://github.com/Puneet-Verma-06/OneAxis.git

### 2. Create Render Account

1. Go to https://render.com
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

### 3. Deploy from Blueprint (Easiest Method)

1. In Render dashboard, click **"New +"** → **"Blueprint"**
2. Connect your GitHub repository: `Puneet-Verma-06/OneAxis`
3. Render will automatically detect `render.yaml` and create both services
4. Click **"Apply"**

### 4. Set Environment Variables

After the blueprint creates the services, configure the **Email API service**:

#### For `oneaxis-email-api` service:

1. Go to the service dashboard
2. Navigate to **Environment** tab
3. Add these variables:

| Variable Name | Value |
|--------------|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_SECURE` | `false` |
| `SMTP_USER` | `oneaxissolutions@gmail.com` |
| `SMTP_PASS` | `scujxxksdygfqzud` |
| `EMAIL_FROM` | `no-reply@yourdomain.com` |
| `CONTACT_RECEIVER` | `oneaxissolutions@gmail.com` |
| `EMAIL_SERVER_PORT` | `10000` (Render's default) |

4. Click **"Save Changes"**

#### For `oneaxis-frontend` service:

1. Go to the frontend service dashboard
2. Navigate to **Environment** tab
3. Add this variable:

| Variable Name | Value |
|--------------|-------|
| `VITE_API_URL` | `https://oneaxis-email-api.onrender.com/send-email` |

**Note:** Replace `oneaxis-email-api` with your actual backend service URL from Render.

4. Click **"Save Changes"**

### 5. Redeploy

After setting environment variables:
1. Go to each service
2. Click **"Manual Deploy"** → **"Deploy latest commit"**

## Alternative: Manual Deployment

If you prefer to deploy services manually instead of using the blueprint:

### Deploy Backend (Email API)

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name:** `oneaxis-email-api`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** Free
4. Add all environment variables listed above
5. Click **"Create Web Service"**

### Deploy Frontend

1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub repository
3. Configure:
   - **Name:** `oneaxis-frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Add environment variable:
   - `VITE_API_URL` = `https://[your-backend-url].onrender.com/send-email`
5. Click **"Create Static Site"**

## Important URLs

After deployment, you'll get:

- **Frontend URL:** `https://oneaxis-frontend.onrender.com` (or custom domain)
- **Backend API URL:** `https://oneaxis-email-api.onrender.com`

Make sure to update `VITE_API_URL` in the frontend with your actual backend URL!

## Troubleshooting

### Emails Not Sending

1. Check environment variables in backend service
2. View logs: Go to backend service → **Logs** tab
3. Verify Gmail App Password is correct

### CORS Errors

If you see CORS errors in browser console:
1. Go to backend service environment variables
2. Add: `FRONTEND_URL` = `https://oneaxis-frontend.onrender.com`
3. Redeploy the backend service

### Backend Service Sleeping (Free Tier)

Render's free tier spins down after 15 minutes of inactivity:
- First request after sleep takes ~30 seconds
- Consider upgrading to paid tier for instant responses
- Or add a health check/ping service

## Gmail App Password Setup

If using Gmail and encountering authentication errors:

1. Enable 2-Factor Authentication on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate a new app password for "Mail"
4. Use that 16-character password as `SMTP_PASS`

## Cost

- **Free Tier:** Both services can run on free tier
- **Limitations:** Backend sleeps after 15 min inactivity, 750 hours/month
- **Upgrade:** $7/month per service for always-on instances

## Local Development

To test locally with environment variables:

```bash
# Terminal 1 - Start backend
npm run start:server

# Terminal 2 - Start frontend
npm run dev
```

Make sure `.env` file exists in project root with all SMTP settings.

---

## Summary Checklist

- ✅ Code pushed to GitHub
- ✅ Render account created
- ✅ Blueprint deployed (or manual services created)
- ✅ Backend environment variables set
- ✅ Frontend `VITE_API_URL` configured with backend URL
- ✅ Both services deployed successfully
- ✅ Contact form tested in production

**Your OneAxis application should now be live on Render! 🚀**
