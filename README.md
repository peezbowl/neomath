# NeoMath.in - GitHub Pages Deployment Package

Congratulations! This ZIP contains the complete static website files for **NeoMath.in**.

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Option 1: Via GitHub Web Interface (Easiest, No Git Required)
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name your repository (e.g. `neomath-website` or `YOUR_USERNAME.github.io`). Set it to **Public**.
3. Unzip this package and drag & drop all files (`index.html`, `class8.html`, `class9.html`, `class10.html`, `videos.html`, `blogs.html`, `ebooks.html`, `contact.html`, `style.css`, `data/`, etc.) directly into GitHub.
4. Commit the changes.
5. In your repository, click **Settings** → **Pages** (in the left sidebar).
6. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
7. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
8. In 60 seconds, your site is live at `https://YOUR_USERNAME.github.io/neomath-website/`!

### Option 2: Custom Domain `neomath.in`
- In GitHub Pages settings, enter `neomath.in` in the **Custom domain** field.
- In your domain DNS registrar (GoDaddy, Namecheap, Cloudflare, etc.):
  - Add an `A` record pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - Add a `CNAME` record for `www` pointing to `YOUR_USERNAME.github.io`

## 📝 How to Update Content Regularly Without Coding
- **Add a YouTube Video**: Open `data/videos.js` or `videos.html` and paste the new video title and YouTube ID.
- **Add an E-Book**: Open `data/ebooks.js` or `ebooks.html` and add your Google Play Books link.
- **Add a Blog**: Open `data/blogs.js` or `blogs.html` and type your article.
- **Update Google Form**: Open `contact.html` and change the `iframe src` link.
