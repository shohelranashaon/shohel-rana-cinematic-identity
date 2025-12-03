# 📋 DNS Records to Add - Exact Values

**Domain**: shohelranashaon.site  
**GitHub Username**: shohelranashaon ✅

---

## 🔧 DNS Records (Copy & Paste Ready)

### A Records (4টি) - Apex Domain-এর জন্য

আপনার domain provider-এ এই 4টি A records add করুন:

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

### CNAME Record (1টি) - WWW Subdomain-এর জন্য

```
Type: CNAME
Name: www
Value: shohelranashaon.github.io
TTL: 3600 (or Auto)
```

---

## ✅ Quick Checklist

- [ ] 4টি A records add করেছেন (apex domain-এর জন্য)
- [ ] 1টি CNAME record add করেছেন (www subdomain-এর জন্য)
- [ ] CNAME value: `shohelranashaon.github.io` (সঠিক)
- [ ] GitHub repository → Settings → Pages → Source = **GitHub Actions**
- [ ] GitHub repository → Settings → Pages → Custom domain = `www.shohelranashaon.site`
- [ ] DNS propagation check করেছেন: https://dnschecker.org/#A/shohelranashaon.site

---

## 🔍 Verification

DNS records add করার পর:

1. **DNS Check**: https://dnschecker.org/#A/shohelranashaon.site
   - সব 4টি A records দেখতে হবে

2. **GitHub Pages Settings**:
   - "DNS check successful" দেখতে হবে
   - "Enforce HTTPS" automatically enable হবে

3. **Website Test**:
   - https://www.shohelranashaon.site
   - Browser-এ lock icon (HTTPS) দেখতে হবে

---

**Time**: DNS propagation হতে 5 minutes - 48 hours লাগতে পারে (usually 1-2 hours)

