# KungfuPanda Blog

This site is based directly on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and is deployed with GitHub Pages.

The site content is customized for a personal blog: notes, tools, thoughts, and long-term writing.

## Key files to edit

- `_config.yml` — site name, URL, footer text, blog name, feature switches.
- `_pages/about.md` — homepage/about content and profile card.
- `_pages/blog.md` — main blog listing page.
- `_pages/notes.md` — filtered list for notes and tools.
- `_pages/thoughts.md` — filtered list for personal thoughts.
- `_posts/` — all blog posts.
- `_data/socials.yml` — public social links.
- `assets/img/kungfupanda_profile.svg` — profile image.

## Add a new post

Create a new Markdown file in `_posts/`:

```text
YYYY-MM-DD-english-title.md
```

Example:

```text
2026-07-25-new-tool-note.md
```

Use this front matter:

```yaml
---
layout: post
title: "Your post title"
date: 2026-07-25 10:00:00 +0800
description: "One sentence summary."
categories: notes
---
```

Recommended categories:

- `notes`
- `tools`
- `thoughts`

## Add images or files

Put images under:

```text
assets/img/
```

Use them in posts:

```markdown
![description](/assets/img/example.png)
```

Put downloadable files under:

```text
assets/pdf/
```

## Local preview

Install Ruby, Bundler, Node.js, Python, and ImageMagick first. Then run:

```powershell
bundle install
npm install
bundle exec jekyll serve
```

Open:

```text
http://127.0.0.1:4000
```

## Publish

Commit and push:

```powershell
git add .
git commit -m "Update blog"
git push
```

The workflow at `.github/workflows/pages.yml` builds the al-folio site and deploys it to GitHub Pages.

## Visitor statistics

The footer uses a Busuanzi-compatible network counter:

```html
https://busuanzi.icodeq.com/busuanzi.pure.mini.js
```

It provides cumulative network-side:

- site views;
- visitors;
- current page views.

For more detailed analytics later, use GoatCounter, Umami, Plausible, or Google Analytics.

## Attribution

Theme: [al-folio](https://github.com/alshedivat/al-folio), MIT License.
