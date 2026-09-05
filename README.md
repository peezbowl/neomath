# NeoMath - Class 8–10 Mathematics Learning Portal
**GitHub Pages Ready Deployment Package**

A static, responsive mathematics website designed for Class 8, Class 9, and Class 10 students. Built with clear separation between content (data/) and UI structure.

## 📁 Directory Structure
```
NeoMath/
├── index.html          # Homepage with class quick-jump & overview
├── classes.html        # Unified Grade Portal (Class 8, 9, 10) with Chapters, Videos, Resources tabs
├── youtube.html        # Dedicated YouTube video masterclasses & playlists
├── blogs.html          # Mathematical strategy blogs & study articles
├── blog-single.html    # Dedicated sample blog post reader
├── ebooks.html         # E-Books showcase with Google Play Books redirect links
├── contact.html        # Contact Us page with Google Form integration
│
├── css/
│   └── style.css       # Pure, responsive modern CSS styling
│
├── js/
│   └── main.js         # Navigation, tab switching, and modal controls
│
├── data/
│   ├── class8.js       # Class 8 chapters, videos & resource links
│   ├── class9.js       # Class 9 chapters, videos & resource links
│   ├── class10.js      # Class 10 chapters, videos & resource links
│   ├── videos.js       # Curated YouTube lessons & playlists
│   ├── blogs.js        # Articles, tips & theorem breakdowns
│   └── ebooks.js       # Book descriptions, ratings & Google Play links
│
└── README.md           # Deployment instructions
```

## 🚀 How to Host on GitHub Pages in 3 Minutes

1. **Create a new repository** on GitHub (e.g., `neomath`).
2. **Upload all the files** from this package maintaining the directory structure (`index.html`, `css/`, `js/`, `data/`).
3. In your GitHub repository, go to **Settings** -> **Pages**.
4. Under **Branch**, select `main` (or `master`) and folder `/(root)`.
5. Click **Save**.
6. Within 60 seconds, your website will be live at:
   `https://<your-github-username>.github.io/neomath/`

## ✏️ Updating Content Regularly (Zero Coding Required!)
To update any section, you simply edit the corresponding file in `data/`:
- **Add new Class 10 chapter or worksheet**: edit `data/class10.js`
- **Add new YouTube video lecture**: edit `data/videos.js`
- **Publish a new blog post**: edit `data/blogs.js`
- **Update E-Book pricing or links**: edit `data/ebooks.js`
- **Update Google Form link**: edit `contact.html`
