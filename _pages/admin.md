---
layout: page
title: Write
permalink: /admin/
description: Browser-based writing shortcuts for this static blog.
nav: false
---

<div class="web-editor-panel">
  <p class="web-editor-kicker">Static blog, browser workflow</p>
  <h1>Write and edit online</h1>
  <p>
    This site is still a static Jekyll blog. These shortcuts open GitHub's web editor,
    so you can write or revise posts in the browser without using local Git commands.
  </p>

  <div class="web-editor-actions">
    <a class="web-editor-button primary" href="https://github.com/{{ site.github_repository }}/new/main/_posts" target="_blank" rel="noopener">
      New post
    </a>
    <a class="web-editor-button" href="https://github.com/{{ site.github_repository }}/tree/main/_posts" target="_blank" rel="noopener">
      Manage posts
    </a>
    <a class="web-editor-button" href="https://github.com/{{ site.github_repository }}/edit/main/_pages/about.md" target="_blank" rel="noopener">
      Edit About
    </a>
    <a class="web-editor-button" href="https://github.com/{{ site.github_repository }}/edit/main/_config.yml" target="_blank" rel="noopener">
      Edit settings
    </a>
  </div>
</div>

## Post template

When GitHub opens the new-file page, name the file like this:

```text
2026-08-06-my-new-note.md
```

Then paste this template:

```markdown
---
layout: post
title: Your Post Title
date: 2026-08-06 20:00:00 +0800
description: One short sentence for the post list.
categories: [notes]
---

Write your content here.
```

Use one of these categories:

- `notes`
- `tools`
- `lively`
- `mood`

Finally, click `Commit changes...` on GitHub. GitHub Pages will rebuild the static site automatically.

