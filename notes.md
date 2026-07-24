---
title: Notes
permalink: /notes/
eyebrow: Notes
description: "Tool notes, reusable methods, and fragments worth returning to."
---

{% assign note_count = 0 %}

<div class="post-list">
  {% for post in site.posts %}
    {% assign show_post = false %}
    {% if post.categories contains "notes" %}
      {% assign show_post = true %}
    {% endif %}
    {% if post.categories contains "tools" %}
      {% assign show_post = true %}
    {% endif %}
    {% if show_post %}
      {% assign note_count = note_count | plus: 1 %}
      {% assign first_category = post.categories | first %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <div class="post-date">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        </div>
        <div class="post-summary">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt_text | default: post.excerpt | strip_html | truncate: 110 }}</p>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>

{% if note_count == 0 %}
  No notes yet.
{% endif %}
