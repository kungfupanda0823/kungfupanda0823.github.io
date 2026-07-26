---
layout: page
title: Mood
permalink: /mood/
description: The fucking XXX.
nav: true
nav_order: 4
---

<div class="category-index">
  <ul class="post-list category-post-list">
    {% assign entry_count = 0 %}
    {% for post in site.posts %}
      {% if post.categories contains "mood" %}
        {% assign entry_count = entry_count | plus: 1 %}
        <li>
          <h2 class="category-post-title">
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          <p class="category-post-description">
            {{ post.description | default: post.excerpt_text | default: post.excerpt | strip_html }}
          </p>
          <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</p>
        </li>
      {% endif %}
    {% endfor %}
  </ul>

  {% if entry_count == 0 %}
    <p class="empty-category">No mood entries yet. Add a post with <code>categories: [mood]</code>.</p>
  {% endif %}
</div>
