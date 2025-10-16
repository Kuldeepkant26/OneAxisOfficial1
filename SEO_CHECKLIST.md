# ✅ SEO Implementation Checklist

## 🎯 Complete This Checklist Before Going Live

---

## Phase 1: Update Placeholder Data (CRITICAL)

### 1.1 Update index.html - Company Information

**File**: `/frontend/index.html`

**Lines 37-42**: Update Company Address
```javascript
// CURRENT (Placeholder):
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Your City",
  "addressRegion": "Your Region",
  "addressCountry": "Your Country"
}

// CHANGE TO (Your actual address):
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Actual City Name",
  "addressRegion": "Actual Region/State",
  "addressCountry": "Actual Country"
}
```

- [ ] City updated
- [ ] Region/State updated
- [ ] Country updated

**Lines 43-46**: Verify Contact Email
```javascript
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "Customer Service",
  "email": "info@oneaxissolutions.com"  // Verify this is correct
}
```

- [ ] Email verified/updated

**Lines 47-52**: Update Social Media Links
```javascript
// CURRENT (Placeholder):
"sameAs": [
  "https://www.facebook.com/oneaxissolutions",
  "https://www.twitter.com/oneaxissolutions",
  "https://www.linkedin.com/company/oneaxissolutions",
  "https://www.instagram.com/oneaxissolutions"
]

// CHANGE TO (Your actual URLs):
"sameAs": [
  "https://www.facebook.com/YourActualFacebookPage",
  "https://www.twitter.com/YourActualTwitterHandle",
  "https://www.linkedin.com/company/YourActualLinkedInPage",
  "https://www.instagram.com/YourActualInstagramHandle"
]
```

- [ ] Facebook URL updated
- [ ] Twitter URL updated
- [ ] LinkedIn URL updated
- [ ] Instagram URL updated

---

## Phase 2: Add Required Images (CRITICAL)

### 2.1 Create Social Media Images

**Location**: `/public/` folder

**Required Images**:

1. **`og-image.jpg`** - Main Open Graph image
   - [ ] Created
   - Size: 1200 x 630 pixels
   - Format: JPG or PNG
   - Max size: 8MB
   - Use: Facebook, LinkedIn, default sharing

2. **`twitter-image.jpg`** - Twitter Card image
   - [ ] Created
   - Size: 1200 x 600 pixels
   - Format: JPG, PNG, or WebP
   - Max size: 5MB
   - Use: Twitter sharing

3. **`interior-og-image.jpg`** - Interior page image
   - [ ] Created
   - Size: 1200 x 630 pixels
   - Format: JPG or PNG
   - Use: Interior page sharing

4. **`services-og-image.jpg`** - Services page image
   - [ ] Created
   - Size: 1200 x 630 pixels
   - Format: JPG or PNG
   - Use: Services page sharing

5. **`careers-og-image.jpg`** - Careers page image
   - [ ] Created
   - Size: 1200 x 630 pixels
   - Format: JPG or PNG
   - Use: Careers page sharing

6. **`contact-og-image.jpg`** - Contact page image
   - [ ] Created
   - Size: 1200 x 630 pixels
   - Format: JPG or PNG
   - Use: Contact page sharing

7. **`logo.png`** - Company logo
   - [ ] Created
   - Size: 512 x 512 pixels (minimum)
   - Format: PNG (transparent background)
   - Use: Schema markup, favicon

**Image Design Tips**:
- Include your company logo
- Use brand colors
- Add clear, readable text
- Keep important content in center (safe zone)
- Test on both desktop and mobile preview

---

## Phase 3: Verify New Pages (COMPLETE)

### 3.1 Check All Pages Exist

- [x] `/src/pages/Home.jsx` - ✅ Updated with SEO
- [x] `/src/pages/interior.jsx` - ✅ Updated with SEO
- [x] `/src/pages/Services.jsx` - ✅ Created with SEO
- [x] `/src/pages/Careers.jsx` - ✅ Created with SEO
- [x] `/src/pages/Contact.jsx` - ✅ Created with SEO

### 3.2 Check All Routes Configured

- [x] `/` - Home route ✅
- [x] `/interior` - Interior route ✅
- [x] `/services` - Services route ✅
- [x] `/careers` - Careers route ✅
- [x] `/contact` - Contact route ✅

### 3.3 Verify SEO Component on All Pages

- [x] Home.jsx has SEO component
- [x] interior.jsx has SEO component
- [x] Services.jsx has SEO component
- [x] Careers.jsx has SEO component
- [x] Contact.jsx has SEO component

---

## Phase 4: Content Optimization (RECOMMENDED)

### 4.1 Optimize Images

- [ ] Add alt text to all images
- [ ] Compress images (use TinyPNG, Squoosh, etc.)
- [ ] Convert to WebP format where possible
- [ ] Implement lazy loading

### 4.2 Review Heading Structure

Check each page for proper heading hierarchy:

**Home Page**:
- [ ] One H1 tag (main heading)
- [ ] H2 tags for sections
- [ ] H3 tags for subsections
- [ ] Logical hierarchy maintained

**Interior Page**:
- [ ] One H1 tag
- [ ] H2 tags for sections
- [ ] H3 tags for subsections

**Services Page**:
- [ ] One H1 tag
- [ ] H2/H3 hierarchy correct

**Careers Page**:
- [ ] One H1 tag
- [ ] H2/H3 hierarchy correct

**Contact Page**:
- [ ] One H1 tag
- [ ] H2/H3 hierarchy correct

### 4.3 Add Internal Links

- [ ] Link from Home to Services
- [ ] Link from Home to Interior
- [ ] Link from Services to Contact
- [ ] Link from Interior to Contact
- [ ] Add links in navigation
- [ ] Add links in footer

---

## Phase 5: Local Testing (REQUIRED)

### 5.1 Build and Test

```bash
# Install dependencies (if not done)
npm install

# Run development server
npm run dev

# Test all routes manually
# Open: http://localhost:5173/
# Test: /, /interior, /services, /careers, /contact

# Build for production
npm run build

# Preview production build
npm run preview
```

- [ ] Development server runs without errors
- [ ] All routes accessible
- [ ] No console errors
- [ ] Production build successful
- [ ] Production preview works

### 5.2 Visual Inspection

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display properly
- [ ] Forms work (Contact page)
- [ ] Theme toggle works
- [ ] Mobile responsive

### 5.3 Check Meta Tags

Use browser DevTools (F12):

**For each page, verify**:
- [ ] Title tag appears correctly
- [ ] Meta description is present
- [ ] Canonical URL is correct
- [ ] OG tags are present
- [ ] Twitter tags are present

**How to check**:
1. Open page
2. Press F12 (DevTools)
3. Go to Elements/Inspector tab
4. Look in `<head>` section
5. Search for `<meta` tags

---

## Phase 6: Online Validation (REQUIRED)

### 6.1 Test Structured Data

**Tool**: Google Rich Results Test  
**URL**: https://search.google.com/test/rich-results

- [ ] Test homepage
- [ ] Organization schema validates
- [ ] No errors reported
- [ ] Screenshot taken for records

### 6.2 Test Facebook Sharing

**Tool**: Facebook Sharing Debugger  
**URL**: https://developers.facebook.com/tools/debug/

For each page:
- [ ] Home page (/)
- [ ] Interior page (/interior)
- [ ] Services page (/services)
- [ ] Careers page (/careers)
- [ ] Contact page (/contact)

**What to check**:
- Image displays correctly
- Title shows correctly
- Description shows correctly
- No errors or warnings

### 6.3 Test Twitter Sharing

**Tool**: Twitter Card Validator  
**URL**: https://cards-dev.twitter.com/validator

For each page:
- [ ] Home page
- [ ] Interior page
- [ ] Services page
- [ ] Careers page
- [ ] Contact page

**What to check**:
- Card type: Summary with large image
- Image displays correctly
- Title shows correctly
- Description shows correctly

### 6.4 Test Performance

**Tool**: Google PageSpeed Insights  
**URL**: https://pagespeed.web.dev/

- [ ] Test homepage
- [ ] Mobile score > 80
- [ ] Desktop score > 90
- [ ] Core Web Vitals passing

**Tool**: GTmetrix  
**URL**: https://gtmetrix.com/

- [ ] Test homepage
- [ ] Grade A or B
- [ ] Performance score > 85%

### 6.5 Test Mobile Friendliness

**Tool**: Google Mobile-Friendly Test  
**URL**: https://search.google.com/test/mobile-friendly

- [ ] Homepage passes
- [ ] No mobile usability issues
- [ ] All elements clickable

### 6.6 Validate HTML

**Tool**: W3C Markup Validator  
**URL**: https://validator.w3.org/

- [ ] Homepage validates
- [ ] No critical errors
- [ ] Warnings addressed or noted

---

## Phase 7: Pre-Deployment (REQUIRED)

### 7.1 Files Checklist

Verify these files exist and are correct:

**Configuration Files**:
- [x] `/public/robots.txt` exists
- [x] `/public/sitemap.xml` exists
- [x] `/public/.htaccess` exists (for Apache)
- [x] `/public/_redirects` exists (for Netlify)

**Component Files**:
- [x] `/src/components/SEO.jsx` exists

**Page Files**:
- [x] All 5 pages exist (Home, Interior, Services, Careers, Contact)
- [x] All pages import SEO component
- [x] All pages have unique SEO props

**Image Files**:
- [ ] All required images in `/public/`
- [ ] Images properly named
- [ ] Images optimized for web

### 7.2 Update Sitemap

**File**: `/public/sitemap.xml`

Update `<lastmod>` dates to current date before deploying:

```xml
<lastmod>2025-10-17</lastmod>  <!-- Change to current date -->
```

- [ ] All dates updated to current date

### 7.3 Final Code Review

- [ ] No console.log statements in production code
- [ ] No commented-out code blocks
- [ ] No TODO comments unaddressed
- [ ] All imports used
- [ ] No unused variables

---

## Phase 8: Deployment (ACTION)

### 8.1 Deploy to Production

Choose your deployment method:

**Option A: Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

**Option B: Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Option C: Traditional Hosting**
```bash
# Build
npm run build

# Upload dist/ folder to server
# Include .htaccess file
```

- [ ] Deployment successful
- [ ] Site accessible at production URL
- [ ] HTTPS enabled
- [ ] All routes work on production

### 8.2 Post-Deployment Verification

**Test Production Site**:
- [ ] Homepage loads (https://oneaxissolutions.com/)
- [ ] All routes accessible
- [ ] Images display correctly
- [ ] No 404 errors
- [ ] HTTPS padlock shows in browser

**Test with Tools Again**:
- [ ] Google Rich Results (production URL)
- [ ] Facebook Sharing Debugger (production URL)
- [ ] Twitter Card Validator (production URL)
- [ ] PageSpeed Insights (production URL)

---

## Phase 9: Search Engine Submission (CRITICAL)

### 9.1 Google Search Console

**URL**: https://search.google.com/search-console

1. **Verify Ownership**:
   - [ ] Add property (https://oneaxissolutions.com)
   - [ ] Verify via HTML meta tag or DNS
   - [ ] Verification successful

2. **Submit Sitemap**:
   - [ ] Go to Sitemaps section
   - [ ] Submit: https://oneaxissolutions.com/sitemap.xml
   - [ ] Sitemap processed successfully

3. **Request Indexing**:
   - [ ] Request indexing for homepage
   - [ ] Request indexing for key pages

### 9.2 Bing Webmaster Tools

**URL**: https://www.bing.com/webmasters

1. **Verify Ownership**:
   - [ ] Add site
   - [ ] Verify ownership
   - [ ] Verification successful

2. **Submit Sitemap**:
   - [ ] Submit sitemap URL
   - [ ] Sitemap processed

### 9.3 Other Search Engines (Optional)

- [ ] Yandex Webmaster (if targeting Russia)
- [ ] Baidu Webmaster (if targeting China)

---

## Phase 10: Analytics Setup (RECOMMENDED)

### 10.1 Google Analytics 4

**URL**: https://analytics.google.com/

1. **Create Property**:
   - [ ] Create GA4 property
   - [ ] Get Measurement ID (G-XXXXXXXXXX)

2. **Install Tracking Code**:
   - [ ] Add to index.html (before closing `</head>`)
   - [ ] Verify tracking works

3. **Configure Events**:
   - [ ] Set up conversion tracking
   - [ ] Set up custom events (optional)

### 10.2 Google Tag Manager (Optional)

**URL**: https://tagmanager.google.com/

- [ ] Create container
- [ ] Install GTM code
- [ ] Add GA4 tag
- [ ] Publish container

---

## Phase 11: Monitoring Setup (RECOMMENDED)

### 11.1 Set Up Alerts

**Google Search Console**:
- [ ] Enable email notifications
- [ ] Set up coverage issue alerts
- [ ] Set up security issue alerts

**Google Analytics**:
- [ ] Set up custom alerts
- [ ] Monitor traffic drops
- [ ] Monitor conversion drops

### 11.2 Regular Monitoring Schedule

Create reminders to check:

**Weekly**:
- [ ] Google Search Console for errors
- [ ] Google Analytics for traffic
- [ ] Site uptime

**Monthly**:
- [ ] Update sitemap if content changed
- [ ] Review keyword rankings
- [ ] Check broken links
- [ ] Review page speed scores

**Quarterly**:
- [ ] Update meta descriptions if needed
- [ ] Review and update content
- [ ] Analyze competitor SEO
- [ ] Update structured data if needed

---

## Phase 12: Advanced SEO (OPTIONAL)

### 12.1 Add More Schema Types

Consider adding:
- [ ] FAQ schema (for FAQ section)
- [ ] Review schema (for testimonials)
- [ ] Breadcrumb schema
- [ ] Product schema (if applicable)
- [ ] LocalBusiness schema (if applicable)

### 12.2 Create Blog

- [ ] Set up blog section
- [ ] Create blog page component
- [ ] Add SEO for blog posts
- [ ] Add Article schema
- [ ] Publish first blog post

### 12.3 Add More Features

- [ ] Create 404 error page
- [ ] Add search functionality
- [ ] Create breadcrumb navigation
- [ ] Add related content sections
- [ ] Implement schema.org markup for more types

---

## 📊 Progress Tracker

### Quick Status Check

**Critical Items** (Must do before launch):
- [ ] Placeholder data updated in index.html
- [ ] Social media images created and added
- [ ] All pages created and routes configured
- [ ] Local testing passed
- [ ] Online validation passed
- [ ] Deployed to production
- [ ] Submitted to search engines

**Important Items** (Should do):
- [ ] Analytics installed
- [ ] Images optimized
- [ ] Internal linking added
- [ ] Search Console configured

**Optional Items** (Nice to have):
- [ ] Blog section created
- [ ] Advanced schema added
- [ ] Additional monitoring set up

### Overall Progress

Calculate your completion percentage:

Total Critical Items: 7  
Completed: ___ / 7 = ___%

Total Important Items: 4  
Completed: ___ / 4 = ___%

**Overall Status**: 
- 🔴 Not Ready (< 50% critical items)
- 🟡 Almost Ready (50-90% critical items)
- 🟢 Ready to Launch (100% critical items)

---

## 🆘 Troubleshooting

### Common Issues

**Issue**: "Sitemap not found"
- **Solution**: Ensure sitemap.xml is in /public/ folder and accessible at https://oneaxissolutions.com/sitemap.xml

**Issue**: "Open Graph image not showing"
- **Solution**: 
  1. Check image exists in /public/
  2. Use full URL: https://oneaxissolutions.com/og-image.jpg
  3. Clear cache in Facebook Debugger
  4. Verify image size (1200x630px)

**Issue**: "Schema validation errors"
- **Solution**: 
  1. Check JSON-LD syntax in index.html
  2. Validate JSON at jsonlint.com
  3. Test with Google Rich Results Test

**Issue**: "Routes not working in production"
- **Solution**: 
  1. Check .htaccess or _redirects file
  2. Ensure SPA fallback is configured
  3. Verify all route files exist

---

## 📞 Get Help

If you encounter issues:

1. **Check Documentation**:
   - SEO_IMPLEMENTATION_GUIDE.md
   - SEO_QUICK_START.md
   - SEO_SUMMARY.md

2. **Test Tools**:
   - Use validation tools to identify specific issues
   - Check browser console for errors

3. **Resources**:
   - Google Search Central: https://developers.google.com/search
   - React SEO: https://react.dev/learn/seo
   - Vite Docs: https://vitejs.dev/

---

## ✅ Final Sign-Off

Before launching, complete this sign-off:

- [ ] All critical checklist items completed
- [ ] All placeholder data replaced with real data
- [ ] All required images created and added
- [ ] Local testing passed without errors
- [ ] Online validation passed with no critical issues
- [ ] Deployed successfully to production
- [ ] Production site tested and working
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools
- [ ] Analytics installed and tracking

**Signed**: _______________  
**Date**: _______________  
**Ready for Launch**: ☐ YES  ☐ NO

---

**Document Version**: 1.0.0  
**Last Updated**: October 17, 2025  
**Next Review**: After launch
