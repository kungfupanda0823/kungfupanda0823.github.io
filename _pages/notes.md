---
layout: page
title: notes
permalink: /notes/
description: Reusable notes and tool records.
nav: true
nav_order: 2
---

<div class="post">
  <ul class="post-list">
    {% for post in site.posts %}
      {% assign show_post = false %}
      {% if post.categories contains "notes" %}
        {% assign show_post = true %}
      {% endif %}
      {% if post.categories contains "tools" %}
        {% assign show_post = true %}
      {% endif %}
      {% if show_post %}
        <li>
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p>{{ post.description | default: post.excerpt_text | default: post.excerpt | strip_html }}</p>
          <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
