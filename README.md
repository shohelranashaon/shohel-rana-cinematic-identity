# Shohel Rana Shaon - Portfolio Website

**Author**: Shohel Rana Shaon

## 🌐 Live Website

**Domain**: https://shohelranashaon.site  
**Status**: ✅ Active and Live

## Project info

**Lovable Project URL**: https://lovable.dev/projects/7791efaf-96e0-41e9-aab6-2310fc178ec5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7791efaf-96e0-41e9-aab6-2310fc178ec5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Vercel (সবচেয়ে সহজ - Recommended)

1. **Vercel account তৈরি করুন**: https://vercel.com/signup
2. **GitHub repository connect করুন**:
   - Vercel dashboard-এ "Add New Project" click করুন
   - আপনার GitHub repository select করুন
3. **Deploy করুন**: Settings automatically configure হবে (Vite preset)
4. **Custom Domain add করুন**:
   - Project settings → Domains
   - আপনার domain name add করুন
   - DNS records follow করুন

### Option 2: Netlify

1. **Netlify account তৈরি করুন**: https://app.netlify.com/signup
2. **Deploy করুন**:
   - "Add new site" → "Import an existing project"
   - GitHub repository connect করুন
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Custom Domain add করুন**: Site settings → Domain management

### Option 3: Traditional Hosting (cPanel)

1. **Build করুন**: `npm run build`
2. **dist folder upload করুন**: `public_html` folder-এ
3. **.htaccess file**: `public/.htaccess` file already আছে

### Quick Deploy with Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

**Detailed deployment guide**: দেখুন `DEPLOYMENT.md` file-এ

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
