# 🔧 Namecheap + Vercel DNS Setup Guide

**Domain**: shohelranashaon.site  
**Provider**: Namecheap  
**Platform**: Vercel

---

## 📋 Step-by-Step Instructions

### Step 1: Vercel Dashboard-এ DNS Records দেখুন

1. Vercel dashboard-এ যান: https://vercel.com/dashboard
2. আপনার project-এ click করুন
3. **Settings** tab-এ যান
4. **Domains** section-এ যান
5. `www.shohelranashaon.site` click করুন
6. **"DNS Records"** tab-এ যান
7. সেখানে exact DNS records দেখবেন - **সেগুলো note করুন**

সাধারণত এই records দেখবেন:

**Root Domain (shohelranashaon.site):**
- Type: A
- Name: @
- Value: [Vercel-এর IP address - dashboard-এ দেখবেন]

**WWW Subdomain (www.shohelranashaon.site):**
- Type: CNAME
- Name: www
- Value: `cname.vercel-dns.com`

---

### Step 2: Namecheap-এ DNS Records Add করুন

#### Method 1: Advanced DNS (Recommended)

1. **Namecheap-এ login করুন**: https://www.namecheap.com/myaccount/login/

2. **Domain List-এ যান**:
   - Dashboard-এ **"Domain List"** click করুন
   - `shohelranashaon.site` domain-এ **"Manage"** button click করুন

3. **Advanced DNS tab-এ যান**:
   - Top menu-এ **"Advanced DNS"** tab click করুন

4. **Old Records Delete করুন** (যদি থাকে):
   - আগে add করা A records বা CNAME records থাকলে **trash icon** click করে delete করুন
   - বিশেষ করে GitHub Pages-এর জন্য add করা records থাকলে delete করুন

5. **Root Domain-এর জন্য A Record Add করুন**:
   - **"Add New Record"** button click করুন
   - **Type**: **A Record** select করুন
   - **Host**: `@` লিখুন
   - **Value**: Vercel dashboard-এ দেখানো IP address paste করুন
     - (সাধারণত `76.76.21.21` বা similar, কিন্তু Vercel dashboard-এ exact value দেখবেন)
   - **TTL**: **Automatic** রাখুন
   - **Save** (✓ icon) click করুন

6. **WWW Subdomain-এর জন্য CNAME Record Add করুন**:
   - **"Add New Record"** button click করুন
   - **Type**: **CNAME Record** select করুন
   - **Host**: `www` লিখুন
   - **Value**: `cname.vercel-dns.com` paste করুন
   - **TTL**: **Automatic** রাখুন
   - **Save** (✓ icon) click করুন

7. **Save All Changes**:
   - সব records add করার পর, page-এর নিচে **"Save All Changes"** button click করুন
   - Confirmation message দেখবেন

---

### Step 3: DNS Propagation Wait করুন

DNS records add করার পর:
- **Minimum**: 5-10 minutes
- **Usually**: 30 minutes - 2 hours
- **Maximum**: 24-48 hours (rare)

---

### Step 4: DNS Records Verify করুন

DNS records add করার 10-15 minutes পর verify করুন:

1. **DNS Checker Website**:
   - https://dnschecker.org/#A/shohelranashaon.site
   - আপনার A record দেখতে হবে
   
   - https://dnschecker.org/#CNAME/www.shohelranashaon.site
   - `cname.vercel-dns.com` দেখতে হবে

2. **Command Line** (optional):
   ```bash
   # Windows PowerShell
   nslookup shohelranashaon.site
   nslookup www.shohelranashaon.site
   ```

---

### Step 5: Vercel Dashboard-এ Refresh করুন

1. Vercel dashboard → **Settings** → **Domains**
2. `www.shohelranashaon.site`-এ **"Refresh"** button click করুন
3. **"Invalid Configuration"** error চলে যাওয়া উচিত
4. **"Valid"** বা **"Active"** status দেখবেন

---

### Step 6: Root Domain Configure করুন

Vercel dashboard-এ `shohelranashaon.site` (root domain) configure করুন:

1. Vercel dashboard → **Settings** → **Domains**
2. `shohelranashaon.site` click করুন
3. **"Connect to an environment"** radio button select করুন
4. **Environment**: **Production** select করুন
5. **"Save"** button click করুন
6. DNS records add করার পর (Step 2-এ করা), **"Refresh"** click করুন

---

## 📸 Visual Guide (Namecheap Interface)

### Advanced DNS Page Layout:

```
┌─────────────────────────────────────────┐
│ Advanced DNS                            │
├─────────────────────────────────────────┤
│                                         │
│ Host Records                            │
│ ┌──────┬──────┬─────────────┬────────┐ │
│ │ Type │ Host │ Value       │ TTL    │ │
│ ├──────┼──────┼─────────────┼────────┤ │
│ │ A    │ @    │ [IP]        │ Auto   │ │ ← Add this
│ │ CNAME│ www  │ cname.ver...│ Auto   │ │ ← Add this
│ └──────┴──────┴─────────────┴────────┘ │
│                                         │
│ [Add New Record] button                │
│                                         │
│ [Save All Changes] button              │
└─────────────────────────────────────────┘
```

---

## ✅ Final Checklist

- [ ] Vercel dashboard-এ DNS records দেখেছেন
- [ ] Namecheap-এ old DNS records delete করেছেন
- [ ] Root domain-এর জন্য A record add করেছেন (@ → Vercel IP)
- [ ] WWW subdomain-এর জন্য CNAME add করেছেন (www → cname.vercel-dns.com)
- [ ] Namecheap-এ "Save All Changes" click করেছেন
- [ ] 10-15 minutes wait করেছেন
- [ ] DNS checker-এ verify করেছেন
- [ ] Vercel dashboard-এ "Refresh" click করেছেন
- [ ] "Invalid Configuration" error চলে গেছে
- [ ] Website load হচ্ছে: https://www.shohelranashaon.site

---

## 🐛 Troubleshooting

### ❌ Still Showing "Invalid Configuration"

**সমাধান**:
1. **DNS Records Verify**: https://dnschecker.org - records দেখাচ্ছে কিনা check করুন
2. **Namecheap-এ Check**: Advanced DNS page-এ records correctly saved হয়েছে কিনা verify করুন
3. **Wait More**: DNS propagation হতে 1-2 hours লাগতে পারে
4. **Vercel Refresh**: Vercel dashboard-এ "Refresh" button click করুন
5. **Old Records**: আগে add করা conflicting records delete করেছেন কিনা check করুন

### ❌ A Record Not Working

**সমাধান**:
1. Vercel dashboard-এ exact IP address copy করেছেন কিনা verify করুন
2. Namecheap-এ Host field-এ `@` আছে কিনা check করুন (blank নয়)
3. TTL value "Automatic" আছে কিনা verify করুন

### ❌ CNAME Record Not Working

**সমাধান**:
1. Value field-এ `cname.vercel-dns.com` exactly আছে কিনা check করুন (no spaces, no typos)
2. Host field-এ `www` আছে কিনা verify করুন
3. Namecheap-এ "Save All Changes" click করেছেন কিনা confirm করুন

### ❌ Website Not Loading

**সমাধান**:
1. **DNS Propagation**: DNS checker-এ verify করুন - records propagate হয়েছে কিনা
2. **Vercel Deployment**: Vercel-এ deployment successful হয়েছে কিনা check করুন
3. **Browser Cache**: Browser cache clear করুন বা Incognito mode-এ test করুন
4. **HTTPS**: `https://` use করে test করুন (not `http://`)

---

## 📞 Support

### Namecheap Support:
- Live Chat: https://www.namecheap.com/support/
- Knowledge Base: https://www.namecheap.com/support/knowledgebase/

### Vercel Support:
- Documentation: https://vercel.com/docs/concepts/projects/domains
- Support: https://vercel.com/support

---

## 🎯 Quick Reference

**Namecheap DNS Records:**
```
Type: A Record
Host: @
Value: [Vercel IP from dashboard]
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Verification:**
- DNS Checker: https://dnschecker.org
- Vercel Dashboard: Refresh button
- Website: https://www.shohelranashaon.site

---

**Time Required**: 15-30 minutes (DNS propagation সহ)  
**Difficulty**: Easy ⭐⭐  
**Status**: Ready to configure ✅

