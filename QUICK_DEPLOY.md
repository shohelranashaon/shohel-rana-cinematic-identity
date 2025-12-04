# 🚀 Quick Deploy Guide - Domain-এ Deploy করুন

আপনার website `shohelranashaon.site` domain-এ deploy করার সহজ উপায়:

## ✅ Option 1: Vercel (সবচেয়ে সহজ - 5 মিনিট)

### Step 1: Vercel-এ Login করুন
1. https://vercel.com/login - এ যান
2. GitHub account দিয়ে login করুন

### Step 2: Project Deploy করুন
1. Vercel dashboard-এ **"Add New Project"** click করুন
2. আপনার GitHub repository select করুন (`Md-Shohel-Rana-Shaon`)
3. **Framework Preset**: Vite (automatically detect হবে)
4. **Build Settings** (automatically set হবে):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **"Deploy"** button click করুন
6. 2-3 মিনিট wait করুন (deployment complete হবে)

### Step 3: Domain Add করুন
1. Deploy হওয়ার পর, project-এ click করুন
2. **Settings** tab-এ যান
3. **Domains** section-এ যান
4. **"Add Domain"** button click করুন
5. Domain name লিখুন: `shohelranashaon.site`
6. **"Add"** click করুন

### Step 4: DNS Configuration
Vercel আপনাকে DNS records দেবে। আপনার domain provider-এ (যেখানে domain কিনেছেন) এই records add করুন:

#### Root Domain (shohelranashaon.site):
```
Type: A
Name: @
Value: [Vercel-এর IP - Vercel dashboard-এ দেখবেন]
TTL: 3600
```

#### WWW Subdomain (www.shohelranashaon.site):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**অথবা** Vercel আপনাকে exact values দেবে - সেগুলো follow করুন।

### Step 5: SSL Certificate
- Vercel automatically SSL certificate provide করবে
- 5-10 minutes-এর মধ্যে HTTPS active হবে

---

## ✅ Option 2: GitHub Pages (যদি GitHub repository আছে)

### Step 1: GitHub Repository Settings
1. GitHub repository-তে যান
2. **Settings** → **Pages** section-এ যান
3. **Source** dropdown-এ **"GitHub Actions"** select করুন
4. **Save** করুন

### Step 2: Custom Domain Add
1. **Custom domain** field-এ `www.shohelranashaon.site` লিখুন
2. **Save** করুন

### Step 3: DNS Configuration
আপনার domain provider-এ এই DNS records add করুন:

**A Records (4টি):**
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

**CNAME Record:**
```
Type: CNAME, Name: www, Value: shohelranashaon.github.io
```

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Deploy to domain"
git push origin main
```

GitHub Actions automatically build এবং deploy করবে।

---

## ✅ Option 3: Netlify

### Step 1: Netlify Account
1. https://app.netlify.com/signup - এ যান
2. GitHub account দিয়ে sign up করুন

### Step 2: Deploy
1. **"Add new site"** → **"Import an existing project"**
2. GitHub repository select করুন
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **"Deploy site"** click করুন

### Step 3: Domain Add
1. Site settings → **Domain management**
2. **"Add custom domain"**
3. `shohelranashaon.site` add করুন
4. DNS records follow করুন

---

## 📋 Common Domain Providers-এ DNS Setup

### Namecheap
1. Domain List → আপনার domain-এ **Manage** click করুন
2. **Advanced DNS** tab-এ যান
3. **Host Records** section-এ records add করুন

### GoDaddy
1. **DNS Management** → **Records**
2. Records add করুন

### Cloudflare
1. **DNS** → **Records**
2. Records add করুন (Proxy: DNS only)

---

## ⏱️ Timeline

- **Deploy**: 2-5 minutes
- **DNS Propagation**: 5 minutes - 48 hours (usually 1-2 hours)
- **SSL Certificate**: 5-10 minutes (after DNS propagation)

---

## ✅ Verification

Deploy হওয়ার পর check করুন:

1. **Website**: https://shohelranashaon.site
2. **WWW**: https://www.shohelranashaon.site
3. **SSL**: Browser-এ lock icon দেখবেন
4. **DNS Check**: https://dnschecker.org/#A/shohelranashaon.site

---

## 🔧 Troubleshooting

### Domain কাজ করছে না?
1. DNS propagation check করুন: https://dnschecker.org
2. DNS records সঠিক আছে কিনা verify করুন
3. 24-48 hours wait করুন

### SSL Certificate কাজ করছে না?
1. DNS properly propagate হয়েছে কিনা check করুন
2. Platform dashboard-এ SSL status check করুন
3. Few minutes wait করুন

---

## 🎯 Recommended: Vercel

**Vercel সবচেয়ে সহজ এবং fastest option:**
- Automatic SSL
- Fast CDN
- Easy domain setup
- Free tier available

**Quick Start:**
1. https://vercel.com/signup
2. GitHub repository connect করুন
3. Deploy করুন
4. Domain add করুন
5. DNS configure করুন

**Done! 🎉**

