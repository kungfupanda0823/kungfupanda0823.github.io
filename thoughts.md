---
title: 随想
permalink: /thoughts/
eyebrow: Thoughts
description: "日常观察、阶段感受和那些不必马上归类的想法。"
---

{% assign thought_count = 0 %}

<div class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "thoughts" %}
      {% assign thought_count = thought_count | plus: 1 %}
      {% assign first_category = post.categories | first %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <span>{{ post.category_label | default: first_category }}</span>
        </div>
        <p>{{ post.excerpt_text | default: post.excerpt | strip_html | truncate: 110 }}</p>
      </a>
    {% endif %}
  {% endfor %}
</div>

{% if thought_count == 0 %}
  暂时还没有随想。留白也算一种开始。
{% endif %}
