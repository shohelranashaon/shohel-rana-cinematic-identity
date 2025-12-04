# 📋 Namecheap-এ Exact DNS Records Add করুন

**Domain**: shohelranashaon.site  
**Provider**: Namecheap  
**Platform**: Vercel

---

## ✅ Vercel-এর দেওয়া Exact DNS Records

### 1. Root Domain (shohelranashaon.site)

```
Type: A
Name: @
Value: 216.198.79.1
```

### 2. WWW Subdomain (www.shohelranashaon.site)

```
Type: CNAME
Name: www
Value: 05cf5040c4faa616.vercel-dns-017.com.
```

**⚠️ Important**: Value-এর শেষে dot (.) আছে - সেটা include করতে হবে!

---

## 📝 Namecheap-এ Step-by-Step Add করুন

### Step 1: Namecheap-এ Login করুন

1. https://www.namecheap.com/myaccount/login/ - এ যান
2. Login করুন

### Step 2: Domain Management-এ যান

1. Dashboard-এ **"Domain List"** click করুন
2. `shohelranashaon.site` domain-এ **"Manage"** button click করুন
3. **"Advanced DNS"** tab-এ click করুন

### Step 3: Old Records Delete করুন

যদি আগে অন্য DNS records add করে থাকেন (যেমন GitHub Pages-এর জন্য), সেগুলো delete করুন:

1. Old A records বা CNAME records-এর পাশে **trash icon (🗑️)** click করুন
2. সব old records delete করুন

### Step 4: Root Domain-এর জন্য A Record Add করুন

1. **"Add New Record"** button click করুন
2. **Type**: **A Record** select করুন
3. **Host**: `@` লিখুন (বা blank রাখুন - Namecheap automatically @ বুঝবে)
4. **Value**: `216.198.79.1` paste করুন
5. **TTL**: **Automatic** select করুন
6. **Save** (✓ icon) click করুন

### Step 5: WWW Subdomain-এর জন্য CNAME Record Add করুন

1. **"Add New Record"** button click করুন
2. **Type**: **CNAME Record** select করুন
3. **Host**: `www` লিখুন
4. **Value**: `05cf5040c4faa616.vercel-dns-017.com.` paste করুন
   - ⚠️ **Important**: শেষে dot (.) আছে - সেটা include করতে হবে!
5. **TTL**: **Automatic** select করুন
6. **Save** (✓ icon) click করুন

### Step 6: Save All Changes

1. সব records add করার পর, page-এর নিচে **"Save All Changes"** button click করুন
2. Confirmation message দেখবেন

---

## ✅ Final Records Summary

Namecheap Advanced DNS-এ এই 2টি records দেখতে হবে:

```
┌────────┬──────┬──────────────────────────────────────┬──────────┐
│ Type   │ Host │ Value                                │ TTL      │
├────────┼──────┼──────────────────────────────────────┼──────────┤
│ A      │ @    │ 216.198.79.1                         │ Automatic│
│ CNAME  │ www  │ 05cf5040c4faa616.vercel-dns-017.com. │ Automatic│
└────────┴──────┴──────────────────────────────────────┴──────────┘
```

---

## ⏱️ Wait & Verify

### Step 1: Wait (10-15 minutes)

DNS records add করার পর **minimum 10-15 minutes** wait করুন।

### Step 2: DNS Check করুন

DNS records propagate হয়েছে কিনা check করুন:

1. **A Record Check**:
   - https://dnschecker.org/#A/shohelranashaon.site
   - `216.198.79.1` দেখতে হবে

2. **CNAME Record Check**:
   - https://dnschecker.org/#CNAME/www.shohelranashaon.site
   - `05cf5040c4faa616.vercel-dns-017.com.` দেখতে হবে

### Step 3: Vercel Dashboard-এ Refresh করুন

1. Vercel dashboard → **Settings** → **Domains**
2. `shohelranashaon.site`-এ **"Refresh"** button click করুন
3. `www.shohelranashaon.site`-এ **"Refresh"** button click করুন
4. **"Invalid Configuration"** error চলে যাওয়া উচিত
5. **"Valid"** বা **"Active"** status দেখবেন

### Step 4: Website Test করুন

1. Browser-এ যান: https://www.shohelranashaon.site
2. Website load হওয়া উচিত
3. Browser-এ **lock icon** (HTTPS) দেখবেন

---

## 🐛 Troubleshooting

### ❌ Still Showing "Invalid Configuration"

**সমাধান**:
1. **DNS Checker**: https://dnschecker.org - records দেখাচ্ছে কিনা verify করুন
2. **Namecheap Verify**: Advanced DNS page-এ records correctly saved হয়েছে কিনা check করুন
3. **Value Check**: CNAME value-এর শেষে dot (.) আছে কিনা verify করুন
4. **Wait More**: DNS propagation হতে 1-2 hours লাগতে পারে
5. **Vercel Refresh**: Vercel dashboard-এ "Refresh" button click করুন

### ❌ CNAME Value Error

**সমাধান**:
- CNAME value-এ **exactly** `05cf5040c4faa616.vercel-dns-017.com.` থাকতে হবে
- শেষে dot (.) আছে - সেটা include করতে হবে
- No spaces, no typos

### ❌ A Record Not Working

**সমাধান**:
- A record value: `216.198.79.1` exactly
- Host: `@` বা blank
- TTL: Automatic

---

## ✅ Checklist

- [ ] Namecheap-এ old DNS records delete করেছেন
- [ ] A record add করেছেন: @ → 216.198.79.1
- [ ] CNAME record add করেছেন: www → 05cf5040c4faa616.vercel-dns-017.com. (dot সহ)
- [ ] "Save All Changes" click করেছেন
- [ ] 10-15 minutes wait করেছেন
- [ ] DNS checker-এ verify করেছেন
- [ ] Vercel dashboard-এ "Refresh" click করেছেন
- [ ] "Invalid Configuration" error চলে গেছে
- [ ] Website load হচ্ছে: https://www.shohelranashaon.site

---

## 📞 Quick Reference

**Exact DNS Records:**
```
A Record:
Host: @
Value: 216.198.79.1

CNAME Record:
Host: www
Value: 05cf5040c4faa616.vercel-dns-017.com.
```

**Verification:**
- DNS Checker: https://dnschecker.org
- Vercel Dashboard: Refresh button
- Website: https://www.shohelranashaon.site

---

**Time Required**: 15-30 minutes (DNS propagation সহ)  
**Status**: Ready to configure ✅

