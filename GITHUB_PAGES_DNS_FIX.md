# 🔧 GitHub Pages DNS Fix - Quick Guide

## ❌ Current Problem

```
DNS check unsuccessful
Both www.shohelranashaon.site and its alternate name are improperly configured
Domain does not resolve to the GitHub Pages server
```

## ✅ Solution: DNS Records Add করুন

আপনার domain provider-এ (যেখানে domain কিনেছেন) এই DNS records add করুন:

### 1. Apex Domain (shohelranashaon.site) - 4টি A Records

আপনার domain provider-এর DNS settings-এ এই 4টি A records add করুন:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

### 2. WWW Subdomain (www.shohelranashaon.site) - CNAME Record

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | **[YOUR_USERNAME].github.io** | 3600 |

**⚠️ Important**: `[YOUR_USERNAME]` এর জায়গায় আপনার **GitHub username** লিখুন।

উদাহরণ: যদি আপনার GitHub username `shohelranashaon` হয়, তাহলে:
- Value হবে: `shohelranashaon.github.io`

---

## 📝 Step-by-Step Instructions

### Step 1: GitHub Username খুঁজে বের করুন

1. GitHub-এ login করুন
2. আপনার profile page-এ যান
3. URL-এ দেখবেন: `https://github.com/[YOUR_USERNAME]`
4. এই username-টি note করুন

### Step 2: Domain Provider-এ DNS Records Add করুন

#### Namecheap-এর জন্য:
1. **Domain List** → আপনার domain-এ **Manage** click করুন
2. **Advanced DNS** tab
3. **Host Records** section-এ:
   - 4টি **A Record** add করুন (উপরে দেখানো values দিয়ে)
   - 1টি **CNAME Record** add করুন (www subdomain-এর জন্য)
4. **Save All Changes**

#### GoDaddy-এর জন্য:
1. **My Products** → আপনার domain-এ **DNS** click করুন
2. **Records** section
3. **Add** button click করে:
   - 4টি **A** records add করুন
   - 1টি **CNAME** record add করুন
4. **Save**

#### Cloudflare-এর জন্য:
1. **DNS** → **Records**
2. **Add record** click করুন
3. **Important**: **Proxy status** = **DNS only** (gray cloud) set করুন
4. 4টি A records এবং 1টি CNAME record add করুন
5. **Save**

### Step 3: GitHub Pages Settings Update করুন

1. GitHub repository → **Settings** → **Pages**
2. **Custom domain** field-এ `www.shohelranashaon.site` লিখুন
3. **Save** করুন

### Step 4: Wait for DNS Propagation

- **Time**: 5 minutes - 48 hours (usually 1-2 hours)
- **Check**: https://dnschecker.org/#A/shohelranashaon.site
- সব 4টি A records দেখতে হবে

### Step 5: Verify

1. **DNS Check**: https://dnschecker.org/#A/shohelranashaon.site
2. **Website**: https://www.shohelranashaon.site
3. **GitHub Pages Settings**: "DNS check successful" দেখতে হবে
4. **HTTPS**: Browser-এ lock icon দেখতে হবে

---

## 🔍 Common Mistakes

### ❌ Wrong CNAME Value
- ❌ `shohelranashaon.github.io` (if your username is different)
- ✅ `[YOUR_ACTUAL_USERNAME].github.io`

### ❌ Missing A Records
- ❌ Only 1 or 2 A records
- ✅ All 4 A records required

### ❌ Cloudflare Proxy Enabled
- ❌ Orange cloud (Proxied)
- ✅ Gray cloud (DNS only)

### ❌ Wrong Domain in GitHub Settings
- ❌ `shohelranashaon.site` (without www)
- ✅ `www.shohelranashaon.site` (with www)

---

## 📞 Need Help?

1. **Detailed Guide**: `GITHUB_PAGES_SETUP.md` file দেখুন
2. **DNS Checker**: https://dnschecker.org
3. **GitHub Docs**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Status**: DNS configuration required  
**Next Step**: Add DNS records to your domain provider

