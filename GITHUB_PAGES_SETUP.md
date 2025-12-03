# GitHub Pages Setup Guide: shohelranashaon.site

## 🔧 GitHub Pages-এ Deploy করার Step-by-Step Guide

### Step 1: GitHub Repository Settings

1. আপনার GitHub repository-তে যান
2. **Settings** → **Pages** section-এ যান
3. **Source** dropdown-এ **GitHub Actions** select করুন
4. Save করুন

### Step 2: DNS Configuration (সবচেয়ে গুরুত্বপূর্ণ!)

আপনার domain provider-এ (যেখানে domain কিনেছেন) এই DNS records add করুন:

#### Option A: Apex Domain (shohelranashaon.site) - A Records

GitHub Pages-এর জন্য 4টি A records add করুন:

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600 (or Auto)
```

#### Option B: WWW Subdomain (www.shohelranashaon.site) - CNAME Record

```
Type: CNAME
Name: www
Value: shohelranashaon.github.io
TTL: 3600 (or Auto)
```

**✅ Your GitHub Username**: `shohelranashaon`

---

## 📋 Common Domain Providers-এ DNS Setup

### Namecheap

1. **Domain List** → আপনার domain-এ **Manage** click করুন
2. **Advanced DNS** tab-এ যান
3. **Host Records** section-এ:

   **A Records (4টি add করুন):**
   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153
   TTL: Automatic

   Type: A Record
   Host: @
   Value: 185.199.109.153
   TTL: Automatic

   Type: A Record
   Host: @
   Value: 185.199.110.153
   TTL: Automatic

   Type: A Record
   Host: @
   Value: 185.199.111.153
   TTL: Automatic
   ```

   **CNAME Record:**
   ```
   Type: CNAME Record
   Host: www
   Value: shohelranashaon.github.io
   TTL: Automatic
   ```

4. **Save All Changes** click করুন

### GoDaddy

1. **My Products** → আপনার domain-এ **DNS** click করুন
2. **Records** section-এ যান
3. **Add** button click করে records add করুন:

   **A Records (4টি):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 600 seconds

   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 600 seconds

   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 600 seconds

   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 600 seconds
   ```

   **CNAME Record:**
   ```
   Type: CNAME
   Name: www
   Value: shohelranashaon.github.io
   TTL: 600 seconds
   ```

4. **Save** করুন

### Cloudflare

1. **DNS** → **Records** section-এ যান
2. **Add record** click করুন

   **A Records (4টি):**
   ```
   Type: A
   Name: @
   IPv4 address: 185.199.108.153
   Proxy status: DNS only (gray cloud)
   TTL: Auto

   Type: A
   Name: @
   IPv4 address: 185.199.109.153
   Proxy status: DNS only
   TTL: Auto

   Type: A
   Name: @
   IPv4 address: 185.199.110.153
   Proxy status: DNS only
   TTL: Auto

   Type: A
   Name: @
   IPv4 address: 185.199.111.153
   Proxy status: DNS only
   TTL: Auto
   ```

   **CNAME Record:**
   ```
   Type: CNAME
   Name: www
   Target: shohelranashaon.github.io
   Proxy status: DNS only (gray cloud)
   TTL: Auto
   ```

3. **Save** করুন

**⚠️ Important**: Cloudflare-এ **DNS only** (gray cloud) mode use করুন, **Proxied** (orange cloud) নয়। GitHub Pages SSL-এর জন্য DNS only mode প্রয়োজন।

---

## 🔍 Step 3: GitHub Pages Settings-এ Domain Add করুন

1. GitHub repository → **Settings** → **Pages**
2. **Custom domain** field-এ `www.shohelranashaon.site` লিখুন
3. **Save** করুন
4. GitHub automatically **Enforce HTTPS** checkbox enable করবে (DNS propagate হওয়ার পর)

---

## ⏱️ Timeline

- **DNS Propagation**: 5 minutes - 48 hours (usually 1-2 hours)
- **GitHub Pages Build**: 2-5 minutes (automatically GitHub Actions run হবে)
- **SSL Certificate**: 5-10 minutes (DNS propagate হওয়ার পর)

---

## ✅ Verification Steps

### 1. DNS Check করুন

Visit: https://dnschecker.org/#A/shohelranashaon.site

সব 4টি A records দেখতে হবে:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

### 2. GitHub Actions Check করুন

1. GitHub repository → **Actions** tab
2. **Deploy to GitHub Pages** workflow check করুন
3. সব steps ✅ (green) দেখতে হবে

### 3. Website Test করুন

- **Main**: https://shohelranashaon.site
- **WWW**: https://www.shohelranashaon.site
- **GitHub Pages URL**: https://shohelranashaon.github.io

### 4. SSL Certificate Check করুন

Browser-এ lock icon দেখতে হবে (HTTPS working)

---

## 🔧 Troubleshooting

### ❌ "DNS check unsuccessful" Error

**সমস্যা**: Domain GitHub Pages server-এ resolve করছে না

**সমাধান**:
1. DNS records সঠিক আছে কিনা check করুন
2. সব 4টি A records add করেছেন কিনা verify করুন
3. CNAME record-এ সঠিক GitHub username আছে কিনা check করুন
4. DNS propagation check করুন: https://dnschecker.org
5. 24-48 hours wait করুন (DNS propagation সময় লাগে)

### ❌ "Enforce HTTPS — Unavailable" Error

**সমস্যা**: SSL certificate provision হয়নি

**সমাধান**:
1. DNS properly propagate হয়েছে কিনা check করুন
2. GitHub Pages settings-এ domain correctly configured আছে কিনা verify করুন
3. Few hours wait করুন (SSL certificate provision করতে সময় লাগে)
4. GitHub Pages settings-এ **Enforce HTTPS** manually enable করার চেষ্টা করুন

### ❌ Build Fails

**সমস্যা**: GitHub Actions workflow fail করছে

**সমাধান**:
1. **Actions** tab-এ error logs check করুন
2. Locally test করুন:
   ```bash
   npm install
   npm run build
   ```
3. Dependencies issues থাকলে fix করুন

### ❌ Website Shows 404

**সমস্যা**: Website load হচ্ছে না

**সমাধান**:
1. GitHub Pages source correctly set আছে কিনা check করুন (GitHub Actions)
2. Build successful হয়েছে কিনা verify করুন
3. CNAME file correctly configured আছে কিনা check করুন
4. Browser cache clear করুন

---

## 📝 Important Notes

1. **CNAME File**: `public/CNAME` file already তৈরি করা আছে। এটি automatically `dist` folder-এ copy হবে build-এর সময়।

2. **GitHub Actions**: `.github/workflows/deploy.yml` file already তৈরি করা আছে। এটি automatically build এবং deploy করবে যখন আপনি `main` branch-এ push করবেন।

3. **Base Path**: যদি subdirectory-তে deploy করতে চান, `vite.config.ts`-এ `base` property add করুন:
   ```typescript
   export default defineConfig({
     base: '/repository-name/', // যদি subdirectory use করেন
     // ... other config
   })
   ```

4. **Both Domains**: 
   - `shohelranashaon.site` (apex domain) - A records দিয়ে
   - `www.shohelranashaon.site` (www subdomain) - CNAME record দিয়ে
   
   দুটোই কাজ করবে যদি DNS correctly configured থাকে।

---

## 🎯 Quick Checklist

- [ ] GitHub repository Settings → Pages → Source = **GitHub Actions**
- [ ] 4টি A records add করেছেন (apex domain-এর জন্য)
- [ ] 1টি CNAME record add করেছেন (www subdomain-এর জন্য)
- [ ] GitHub Pages settings-এ custom domain add করেছেন
- [ ] DNS propagation check করেছেন (https://dnschecker.org)
- [ ] GitHub Actions workflow successfully run হয়েছে
- [ ] Website load হচ্ছে (https://www.shohelranashaon.site)
- [ ] SSL certificate active (lock icon দেখাচ্ছে)

---

## 📞 Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **DNS Issues**: আপনার domain registrar-এর support contact করুন
- **GitHub Support**: https://support.github.com

---

**Domain**: shohelranashaon.site  
**Status**: Configuration ready  
**Last Updated**: 2025-01-27

