# Blog editing guide

This guide records the files you are most likely to edit when maintaining this personal blog.

## 1. Change the top navigation

Navigation pages are controlled by Markdown files in `_pages/`.

Current pages:

- `_pages/about.md` → `about`, homepage
- `_pages/notes.md` → `Notes`
- `_pages/tools.md` → `Tools`
- `_pages/lively.md` → `Lively`
- `_pages/mood.md` → `Mood`

To show a page in the top navigation, keep this in the file header:

```yaml
nav: true
nav_order: 1
```

To hide a page, change it to:

```yaml
nav: false
```

To change the displayed name, edit:

```yaml
title: Notes
```

To change the URL, edit:

```yaml
permalink: /notes/
```

## 2. Change the site title

Edit `_config.yml`:

```yaml
first_name: Kungfu
last_name: Panda
```

The bold style of both words is controlled in:

```text
assets/css/custom.css
```

Look for:

```css
.navbar-brand,
.navbar-brand.title
```

## 3. Change the footer text

Edit `_config.yml`:

```yaml
footer_text: "Forever 37.3&#8451;"
```

`&#8451;` displays as `℃` in the browser and avoids encoding problems on Windows.

Footer layout and page-view statistics are controlled in:

```text
_includes/footer.liquid
```

Footer color and spacing are controlled in:

```text
assets/css/custom.css
```

Look for the section:

```css
/* Footer: motto and counter on one restrained line. */
```

## 4. Change copyright text under the social icons

Edit `_config.yml`:

```yaml
contact_note: >
  Copyright 2026 Kungfu Panda. All rights reserved.
```

This text appears under the About-page social icons.

## 5. Change social icons

Edit `_data/socials.yml`.

Current setting:

```yaml
github_username: kungfupanda0823
rss_icon: true
```

If you only want RSS:

```yaml
rss_icon: true
```

If you want GitHub + RSS:

```yaml
github_username: kungfupanda0823
rss_icon: true
```

Icon size is controlled in `assets/css/custom.css`:

```css
.social .contact-icons i {
  font-size: clamp(1.2rem, 3vw, 1.65rem);
}
```

## 6. Add a new post

Create a new Markdown file in `_posts/`.

Filename format:

```text
YYYY-MM-DD-english-title.md
```

Example:

```text
2026-07-27-a-small-note.md
```

Basic template:

```markdown
---
layout: post
title: Your Post Title
date: 2026-07-27 20:00:00 +0800
description: One short sentence describing this post.
categories: [notes]
---

Write your content here.
```

## 7. Put posts into different sections

Use one of these categories in the post header:

```yaml
categories: [notes]
categories: [tools]
categories: [lively]
categories: [mood]
```

The category decides which navigation page will list the post.

## 8. Edit About page content

Edit:

```text
_pages/about.md
```

The text after the second `---` is the visible About content.

The line under the name is:

```yaml
subtitle: Zest Carries Forever
```

The text below the profile image is:

```yaml
more_info: >
  <p class="profile-motto">I AM WHAT I AM</p>
```

## 9. Update and publish

After editing files:

```bash
git add .
git commit -m "Update blog content"
git push origin main
```

GitHub Pages will rebuild the website automatically after pushing.

