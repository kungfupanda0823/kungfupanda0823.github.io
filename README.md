# KungfuPanda

This is a Jekyll + GitHub Pages personal blog. The current visual direction follows an al-folio-like minimal profile style: white background, compact top navigation, teal accent links, an About/Profile home section, clean post cards, and restrained typography.

The interface is in English. Post content can still be written in Chinese.

## Project structure

```text
.
├── _posts/                 # Blog posts: YYYY-MM-DD-english-title.md
├── _layouts/               # Page and post templates
├── _includes/              # Header and footer
├── assets/
│   ├── css/main.css        # Theme colors, layout, font sizes
│   ├── images/posts/       # Post images
│   └── files/              # Downloadable files
├── about.md                # About page
├── notes.md                # Notes page
├── thoughts.md             # Thoughts page
├── archive.md              # Archive page
├── index.md                # Homepage
└── _config.yml             # Site config
```

## Local preview

Install Ruby and Bundler first, then run:

```powershell
bundle install
bundle exec jekyll serve
```

Open:

```text
http://127.0.0.1:4000
```

To build-check only:

```powershell
bundle exec jekyll build
```

## Add a new post

Create a Markdown file in `_posts/`:

```text
YYYY-MM-DD-english-title.md
```

Example:

```text
2026-07-25-my-first-note.md
```

Use this front matter:

```yaml
---
title: "Your post title"
date: 2026-07-25 10:00:00 +0800
categories: [notes]
category_label: "Notes"
excerpt_text: "One-sentence summary."
---
```

Then write the body in Markdown.

MathJax is enabled:

```markdown
Inline math: $E = mc^2$

Block math:

$$
E = mc^2
$$
```

Code blocks are supported:

````markdown
```python
print("hello blog")
```
````

## Categories

Use these categories first:

- `thoughts`: personal reflections;
- `notes`: reusable notes;
- `tools`: tool records.

If the site grows, you can add categories such as `reading`, `summary`, or `research`.

## Images and files

Post images:

```text
assets/images/posts/YYYY-MM-DD-post-name/
```

Downloadable files:

```text
assets/files/
```

Image example:

```markdown
![Figure description](/assets/images/posts/2026-07-25-my-note/fig1.png)
```

## Publish to GitHub Pages

After editing:

```powershell
git add .
git commit -m "Update blog"
git push
```

The repository uses `.github/workflows/pages.yml`. Pushing to `main` triggers GitHub Actions and deploys to GitHub Pages.

Confirm GitHub Pages settings:

1. Open repository `Settings`;
2. Go to `Pages`;
3. Set `Build and deployment` to `GitHub Actions`;
4. Wait for Actions to turn green.

Site URL:

```text
https://kungfupanda0823.github.io
```

## Visitor statistics

The bottom-right visitor panel uses a Busuanzi-compatible public script:

```html
https://busuanzi.icodeq.com/busuanzi.pure.mini.js
```

It records network-side cumulative counts:

- `Site views`: total site page views;
- `Visitors`: total unique visitors estimated by the counter service;
- `Page views`: current page views.

If you later need a dashboard, daily reports, referrers, privacy controls, or more reliable analytics, replace it with GoatCounter, Umami, Plausible, or Google Analytics.

## What to edit later

- Site title, subtitle, author text: `_config.yml`
- Top navigation: `_includes/site-header.html`
- Visitor panel and footer: `_includes/site-footer.html`
- Homepage profile and latest posts: `index.md`
- Theme colors, layout, spacing, font sizes: `assets/css/main.css`
- About page text: `about.md`
- Notes page: `notes.md`
- Thoughts page: `thoughts.md`
- Archive page: `archive.md`
- Blog posts: `_posts/YYYY-MM-DD-english-title.md`
