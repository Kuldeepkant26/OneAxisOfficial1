# Email Configuration for Different Environments

## Environment Variables by Platform

### Local Development
```
VITE_API_URL=http://localhost:5000/send-email
```

### Render Deployment
```
VITE_API_URL=https://oneaxis-email-api.onrender.com/send-email
```

### AWS Deployment (Future)
```
VITE_API_URL=https://[your-aws-api-url]/send-email
```

Common AWS patterns:
- API Gateway: `https://abc123.execute-api.us-east-1.amazonaws.com/prod/send-email`
- Elastic Beanstalk: `https://your-app.us-east-1.elasticbeanstalk.com/send-email`
- EC2 with domain: `https://api.yourdomain.com/send-email`

### Netlify Deployment (Future)
```
VITE_API_URL=/.netlify/functions/send-email
```

---

## Important Notes

1. **Always set VITE_API_URL** in the platform's environment variables, NOT in `.env` file (which isn't deployed)
2. **The URL changes per platform** - each deployment needs its own backend URL
3. **Test locally first** with `http://localhost:5000/send-email`
4. **After deploying backend**, update frontend's `VITE_API_URL` to match
5. **Always use HTTPS** in production (not HTTP)

## Quick Reference

**Where to set this variable:**
- **Render:** Service Dashboard → Environment → Add Variable
- **AWS Amplify:** App Settings → Environment Variables
- **AWS Elastic Beanstalk:** Configuration → Software → Environment Properties
- **Netlify:** Site Settings → Environment Variables
- **Vercel:** Project Settings → Environment Variables

## Testing Strategy

1. ✅ Test locally with localhost URL
2. ✅ Deploy to Render and test
3. ✅ If works on Render, then consider AWS
4. ✅ For AWS: Deploy backend first, get URL, then set in frontend

You **do not** need to redeploy your code - just change the environment variable in each platform's dashboard!
