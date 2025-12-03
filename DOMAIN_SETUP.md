# Domain Setup Guide: shohelranashaon.site

আপনার domain `shohelranashaon.site`-এ website deploy করার step-by-step guide:

## 🚀 Vercel-এ Deploy (Recommended)

### Step 1: Vercel Account তৈরি করুন
1. https://vercel.com/signup - এ যান
2. GitHub account দিয়ে sign up করুন

### Step 2: Project Deploy করুন
1. Vercel dashboard-এ "Add New Project" click করুন
2. আপনার GitHub repository select করুন
3. Framework Preset: **Vite** (automatically detect হবে)
4. Build Settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. "Deploy" button click করুন

### Step 3: Domain Add করুন
1. Deploy হওয়ার পর, project-এ click করুন
2. **Settings** tab-এ যান
3. **Domains** section-এ যান
4. "Add Domain" button click করুন
5. Domain name লিখুন: `shohelranashaon.site`
6. "Add" click করুন

### Step 4: DNS Configuration

Vercel আপনাকে DNS records দেবে। আপনার domain provider-এ (যেখানে domain কিনেছেন) এই records add করুন:

#### Option A: A Record (Root Domain)
```
Type: A
Name: @
Value: [Vercel-এর IP address - Vercel আপনাকে দেবে]
TTL: 3600 (or Auto)
```

#### Option B: CNAME Record (Recommended)
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

#### WWW Subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

### Step 5: SSL Certificate
- Vercel automatically SSL certificate provide করবে
- HTTPS automatically enable হবে
- 5-10 minutes-এর মধ্যে SSL active হবে

---

## 🌐 Netlify-এ Deploy

### Step 1: Netlify Account
1. https://app.netlify.com/signup - এ যান
2. GitHub account দিয়ে sign up করুন

### Step 2: Deploy
1. "Add new site" → "Import an existing project"
2. GitHub repository select করুন
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. "Deploy site" click করুন

### Step 3: Domain Add
1. Site settings → Domain management
2. "Add custom domain"
3. `shohelranashaon.site` add করুন
4. DNS records follow করুন

---

## 📋 DNS Records (Common Providers)

### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add records:
   - Type: A Record, Host: @, Value: [Vercel IP]
   - Type: CNAME, Host: www, Value: cname.vercel-dns.com

### GoDaddy
1. DNS Management → Records
2. Add records:
   - Type: A, Name: @, Value: [Vercel IP]
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### Cloudflare
1. DNS → Records
2. Add records:
   - Type: A, Name: @, Value: [Vercel IP], Proxy: DNS only
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com, Proxy: DNS only

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
3. 24-48 hours wait করুন (DNS propagation সময় লাগে)

### SSL Certificate কাজ করছে না?
1. DNS properly propagate হয়েছে কিনা check করুন
2. Vercel/Netlify dashboard-এ SSL status check করুন
3. Few minutes wait করুন

### Build Error?
1. Locally test করুন: `npm run build`
2. Build logs check করুন
3. Dependencies install করুন: `npm install`

---

## 📞 Support

- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support

---

## 🎯 Quick Commands

```bash
# Build test
npm run build

# Preview locally
npm run preview

# Vercel CLI (optional)
npm i -g vercel
vercel login
vercel --prod
```

---

**Domain**: shohelranashaon.site  
**Status**: Ready for deployment  
**Last Updated**: 2025-01-27

