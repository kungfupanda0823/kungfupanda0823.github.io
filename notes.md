---
title: 笔记
permalink: /notes/
eyebrow: Notes
description: "把工具经验、学习片段和可复用的方法放在这里。"
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

{% if note_count == 0 %}
  暂时还没有笔记。下一篇文章就从一个小问题开始。
{% endif %}
