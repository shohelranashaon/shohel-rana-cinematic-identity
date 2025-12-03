# Domain-এ Deploy করার Guide

আপনার website টি domain-এ deploy করার জন্য কয়েকটি সহজ উপায়:

## 🚀 Option 1: Vercel (সবচেয়ে সহজ - Recommended)

### Steps:
1. **Vercel account তৈরি করুন**: https://vercel.com/signup
2. **GitHub repository connect করুন**:
   - Vercel dashboard-এ যান
   - "Add New Project" click করুন
   - আপনার GitHub repository select করুন
3. **Settings configure করুন**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **Deploy করুন**: "Deploy" button click করুন
5. **Custom Domain add করুন**:
   - Project settings-এ যান
   - "Domains" section-এ যান
   - আপনার domain name add করুন
   - DNS records follow করুন (Vercel আপনাকে instructions দেবে)

### DNS Configuration:
আপনার domain provider-এ (যেমন Namecheap, GoDaddy) এই records add করুন:
- **A Record**: `@` → Vercel-এর IP address
- **CNAME Record**: `www` → `cname.vercel-dns.com`

---

## 🌐 Option 2: Netlify

### Steps:
1. **Netlify account তৈরি করুন**: https://app.netlify.com/signup
2. **Deploy করুন**:
   - "Add new site" → "Import an existing project"
   - GitHub repository connect করুন
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
3. **Custom Domain add করুন**:
   - Site settings → Domain management
   - "Add custom domain" click করুন
   - DNS records configure করুন

---

## ☁️ Option 3: Cloudflare Pages

### Steps:
1. **Cloudflare account তৈরি করুন**: https://dash.cloudflare.com/sign-up
2. **Pages project তৈরি করুন**:
   - Pages → Create a project
   - GitHub repository connect করুন
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
3. **Custom Domain add করুন**:
   - Custom domains section-এ যান
   - আপনার domain add করুন

---

## 📦 Option 4: Traditional Hosting (cPanel/Shared Hosting)

যদি আপনি traditional hosting (যেমন Namecheap, Hostinger) ব্যবহার করেন:

### Steps:
1. **Build করুন locally**:
   ```bash
   npm run build
   ```
2. **dist folder upload করুন**:
   - `dist` folder-এর সব files আপনার hosting-এর `public_html` folder-এ upload করুন
3. **.htaccess file তৈরি করুন** (Apache server-এর জন্য):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔧 Build Command

যেকোনো platform-এ deploy করার আগে, locally test করুন:

```bash
# Dependencies install করুন
npm install

# Production build করুন
npm run build

# Build preview করুন
npm run preview
```

Build successful হলে `dist` folder-এ production-ready files পাবেন।

---

## 📝 Important Notes

1. **Environment Variables**: যদি কোনো API keys বা secrets থাকে, hosting platform-এ environment variables set করুন
2. **Base Path**: যদি subdirectory-তে deploy করতে চান, `vite.config.ts`-এ `base` property add করুন
3. **HTTPS**: সব modern hosting platforms automatically HTTPS provide করে
4. **DNS Propagation**: Domain connect করার পর DNS changes propagate হতে 24-48 hours লাগতে পারে

---

## 🎯 Quick Start (Vercel - Recommended)

```bash
# Vercel CLI install করুন
npm i -g vercel

# Login করুন
vercel login

# Deploy করুন
vercel

# Production deploy করুন
vercel --prod
```

---

## ❓ Help

কোনো সমস্যা হলে:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Cloudflare Docs: https://developers.cloudflare.com/pages

