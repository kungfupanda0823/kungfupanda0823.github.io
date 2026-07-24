---
layout: page
title: thoughts
permalink: /thoughts/
description: Personal reflections and loose fragments.
nav: true
nav_order: 3
---

<div class="post">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains "thoughts" %}
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
