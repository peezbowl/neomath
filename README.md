# NeoMath.in — Modern Educational Mathematics Website

NeoMath.in is a fast, responsive, and modern educational mathematics website designed specifically for students of **CBSE Classes 8, 9, and 10**.

The website provides students with:
- **Comprehensive Chapter Notes**: High-contrast, easy-to-read mathematical explanations, formulas, theorems, and NCERT-style exemplar solutions.
- **YouTube Video Classroom**: Visual video lectures, proofs, and tricks organized by class with interactive filter tabs.
- **Math Blogs & Study Hacks**: Conceptual deep dives, exam strategies, and tips for cracking mathematics tests without fear.
- **Free E-Books & Formula Sheets**: Printable PDF revision handbooks for quick exam preparation.
- **Direct Teacher Doubt Portal**: Dedicated contact page with doubt submission form, email links, and Google Forms integration.

---

## 📁 Project Folder Structure

```text
neomath.in/
│
├── index.html                 # Main Homepage (Hero, Class Cards, Features, Recent Updates)
├── class8.html                # Class 8 Landing Page (All 13 CBSE Chapters + Resources)
├── class9.html                # Class 9 Landing Page (All 12 CBSE Chapters + Resources)
├── class10.html               # Class 10 Landing Page (All 14 CBSE Chapters + Resources)
│
├── class8-rational-numbers.html # Sample Chapter Page: Class 8 Rational Numbers
├── class9-polynomials.html      # Sample Chapter Page: Class 9 Polynomials
├── class10-real-numbers.html    # Sample Chapter Page: Class 10 Real Numbers
│
├── youtube.html               # YouTube Video Library with interactive Class Filters
├── blogs.html                 # Math Blogs & Study Guides Catalog
├── blog-example.html          # Sample Blog Article (Mastering Trigonometric Identities)
├── ebooks.html                # Free PDF E-Books & Formula Bible Library
├── contact.html               # Teacher Contact Page & Doubt Submission Form
│
├── css/
│   └── style.css              # Complete NeoMath Design System (Dark/Cyan theme, responsive grid)
│
├── js/
│   └── main.js                # Mobile navigation drawer, YouTube filter tabs, active link logic
│
└── README.md                  # This teacher's guide and deployment instructions
```

---

## 🚀 How to Run the Website Locally

Since NeoMath.in is built using clean, standard HTML5, CSS3, and modern JavaScript:

### Method 1: Double-Click (Easiest)
Simply double-click `index.html` in your file manager. It will open instantly in Google Chrome, Safari, Firefox, or Edge.

### Method 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will launch on `http://127.0.0.1:5500/`.

### Method 3: Using Node / Vite (Development Server)
If you have Node.js installed:
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🌐 How to Host Free on GitHub Pages

You can host NeoMath.in completely free with a custom domain or `username.github.io` on GitHub Pages:

1. **Create a GitHub Repository:**
   - Go to [GitHub.com](https://github.com) and create a new public repository named `neomath` (or `yourusername.github.io`).
2. **Upload Your Files:**
   - Push or drag-and-drop all files (`index.html`, `class8.html`, `class9.html`, `class10.html`, `css/`, `js/`, etc.) to the `main` branch.
3. **Enable GitHub Pages:**
   - In your GitHub repository, click on **Settings** → **Pages** (on the left menu).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. **Your Site is Live:**
   - GitHub will generate a URL like `https://yourusername.github.io/neomath/`.
5. **(Optional) Add Custom Domain `neomath.in`:**
   - In GitHub Pages settings under **Custom domain**, enter `neomath.in`.
   - Add a `CNAME` record in your DNS manager (GoDaddy, Namecheap, Cloudflare, etc.) pointing to `yourusername.github.io`.

---

## ✏️ Teacher's Maintenance Guide: How to Update Content

Every HTML file contains clear `<!-- TEACHER: ... -->` comments pinpointing where edits should be made.

### 1. How to Add or Edit a Chapter in Class 8, 9, or 10
1. Open `class8.html`, `class9.html`, or `class10.html`.
2. Find the `<div class="chapters-grid">` section.
3. To edit an existing chapter, simply update the title and summary paragraph.
4. To add a new chapter, duplicate a `.chapter-card` block:
   ```html
   <div class="chapter-card">
     <div class="chapter-card-top">
       <span class="chapter-num">Chapter 15</span>
       <span class="chapter-badge-type">Topic Name</span>
     </div>
     <h3 class="chapter-title">Chapter Title Here</h3>
     <p class="chapter-desc">Short summary of theorems and concepts...</p>
     <div class="chapter-action-bar">
       <a href="your-chapter-page.html" class="btn btn-primary btn-sm">Read Notes →</a>
       <a href="https://youtube.com/..." target="_blank" class="nav-link">Video ↗</a>
     </div>
   </div>
   ```

### 2. How to Create a New Chapter Reading Page
1. Duplicate one of the sample chapter templates:
   - `class8-rational-numbers.html`
   - `class9-polynomials.html`
   - `class10-real-numbers.html`
2. Rename the copy (e.g. `class10-triangles.html`).
3. Open the file and update:
   - `<title>` and `<h1 class="reading-title">`
   - The `<div class="content-body">` with your mathematics notes, formulas, and solved examples.
   - The return button: `<a href="class10.html">← Return to Class 10 All Chapters</a>`.

### 3. How to Update YouTube Video Links
1. Open `youtube.html` (or `index.html` / chapter files).
2. Look for the `<!-- Video Card -->` blocks.
3. Replace the `href="https://www.youtube.com/watch?v=..."` attribute with your new YouTube video URL.
4. Set the `data-class="class8"` (or `data-class="class9"` or `data-class="class10"`) so the interactive filter tabs sort the video accurately.
5. Update the video duration badge: `<span class="video-duration">18:45</span>`.

### 4. How to Add a New Blog Post
1. Duplicate `blog-example.html` and rename it (e.g., `blog-quadratic-formula.html`).
2. Replace the title, date, reading time, and article text inside `<article class="reading-wrapper">`.
3. Open `blogs.html` and add a new card in `.blogs-grid` linking to your new article:
   ```html
   <div class="blog-card">
     <div class="blog-meta-top">
       <span class="blog-category-badge">Algebra • Class 10</span>
       <span class="blog-read-time">5 min read</span>
     </div>
     <h2 class="blog-title">Your New Blog Post Title</h2>
     <p class="blog-excerpt">Brief summary of the article...</p>
     <a href="blog-quadratic-formula.html" class="btn btn-primary btn-sm">Read Full Article →</a>
   </div>
   ```

### 5. How to Update E-Book PDF Download Links
1. Open `ebooks.html`.
2. Locate the card for the class you want to update (`#class8`, `#class9`, `#class10`, or `#formulas`).
3. Upload your PDF file to your repository (e.g., in a `pdfs/` folder) or upload it to Google Drive (with sharing set to "Anyone with the link can view").
4. Replace the `href="#"` on the download button with your link:
   ```html
   <a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" class="btn btn-primary">
     Download Class 10 E-Book (PDF) 📥
   </a>
   ```

### 6. How to Update Contact & Social Information
1. Open `contact.html` and `index.html`.
2. Search for `mailto:contact@neomath.in` and replace it with your actual email address.
3. Search for `youtube.com/@NeoMathIndia` and replace it with your channel handle.
4. Search for `forms.google.com` to link your custom Google Form.

---

## 🎨 Design System Specifications

- **Background Palette**: Deep Midnight Navy (`#070c18` canvas, `#0d1527` card background, `#142038` hover surfaces).
- **Primary Accent**: Electric Cyan (`#00f2fe` to `#4facfe` gradient).
- **Secondary Accent**: Violet / Royal Purple (`#8a2be2` to `#a855f7`).
- **Reading Content Canvas**: Clean light off-white reading paper (`#ffffff` card, `#0f172a` high-contrast typography, `#f8fafc` code/math boxes).
- **Mathematical Icons**: Subtle Pi ($\pi$), Sigma ($\Sigma$), Infinity ($\infty$), and Integral ($\int$) watermark elements.
- **Responsiveness**: Fluid layout with responsive breakpoints for mobile phones, tablets, laptops, and wide desktop screens.
