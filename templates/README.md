# NeoMath.in — Templates & Page Creation Guide

This folder contains pre-styled, ready-to-copy HTML templates for **NeoMath.in**.

Every template is pre-linked with NeoMath's responsive design system (`../css/style.css`), mobile menu engine (`../js/main.js`), and navigation bars. Whenever you add a new page, it automatically adopts the website design without requiring any CSS or JavaScript edits.

---

## 📁 Folder Organization

```text
neomath/
├── index.html              # Homepage
├── youtube.html            # Curated Video Library
├── ebooks.html             # Downloadable Revision PDFs
├── contact.html            # Teacher Doubt Form
├── css/style.css           # Global Theme & Reading Styles
├── js/main.js              # Mobile Drawer & Interactions
│
├── class8/                 # ALL Class 8 Content
│   ├── index.html          # Class 8 Syllabus & Chapter List
│   └── ch01-rational-numbers.html
│
├── class9/                 # ALL Class 9 Content
│   ├── index.html          # Class 9 Syllabus & Chapter List
│   └── ch02-polynomials.html
│
├── class10/                # ALL Class 10 Content
│   ├── index.html          # Class 10 Syllabus & Board Blueprint
│   └── ch01-real-numbers.html
│
├── blogs/                  # ALL Blogs & Guides
│   ├── index.html          # Blogs Catalog Page
│   ├── blog-trigonometric-identities.html
│   └── blog-common-calculation-mistakes.html
│
└── templates/              # YOUR READY-TO-COPY TEMPLATES
    ├── chapter-template.html
    ├── blog-template.html
    └── README.md
```

---

## 🚀 How to Add a New Chapter Page (in 3 Minutes)

### Step 1: Copy the Template
1. Go to the `templates/` folder.
2. Copy `chapter-template.html`.
3. Paste it into the appropriate class folder:
   - For Class 8: paste inside `/class8/` and rename it (e.g., `ch02-linear-equations.html`).
   - For Class 9: paste inside `/class9/` and rename it (e.g., `ch01-number-systems.html`).
   - For Class 10: paste inside `/class10/` and rename it (e.g., `ch08-trigonometry.html`).

### Step 2: Edit the Content
Open your new file in any text editor (VS Code, Notepad, etc.):
- Replace `{{CLASS_NUM}}` with `8`, `9`, or `10`.
- Replace `{{CHAPTER_NUM}}` with the chapter number.
- Replace `{{CHAPTER_TITLE}}` with the chapter title.
- Fill in the formulas in the `<div class="formula-box">`.
- Add your concept explanations, NCERT exemplar problems, and teacher pro-tips.

### Step 3: Link it in that Class's Index
1. Open the corresponding class index file (e.g. `/class8/index.html`).
2. Find the card for that chapter.
3. Update the button link:
   ```html
   <a href="ch02-linear-equations.html" class="btn btn-primary btn-sm">Read Chapter Notes →</a>
   ```
4. Save and publish!

---

## ✍️ How to Add a New Blog Post

### Step 1: Copy the Template
1. Copy `templates/blog-template.html`.
2. Paste it into the `/blogs/` folder.
3. Rename it descriptively, e.g. `blog-exam-revision-plan.html`.

### Step 2: Edit the Placeholders
- Replace `{{BLOG_TITLE}}`, `{{CATEGORY}}`, `{{READ_TIME}}`, and `{{PUBLISH_DATE}}`.
- Write your article text, headings, and visual tips.

### Step 3: Add to Blog Catalog
1. Open `/blogs/index.html`.
2. Duplicate an article card and update the link:
   ```html
   <a href="blog-exam-revision-plan.html" class="blog-card">...</a>
   ```
3. Save and publish!
