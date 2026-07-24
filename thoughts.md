---
title: Thoughts
permalink: /thoughts/
eyebrow: Thoughts
description: "Short reflections, personal observations, and loose fragments."
---

{% assign thought_count = 0 %}

<div class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "thoughts" %}
      {% assign thought_count = thought_count | plus: 1 %}
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

{% if thought_count == 0 %}
  No thoughts yet.
{% endif %}
