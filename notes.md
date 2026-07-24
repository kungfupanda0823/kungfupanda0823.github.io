---
title: 笔记
permalink: /notes/
eyebrow: Notes
description: "把工具经验、学习片段和可复用的方法放在这里。"
---

{% assign note_posts = site.posts | where_exp: "post", "post.categories contains 'notes' or post.categories contains 'tools'" %}

{% if note_posts.size > 0 %}
  <div class="post-list">
    {% for post in note_posts %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <span>{{ post.category_label | default: post.categories.first }}</span>
        </div>
        <p>{{ post.excerpt_text | default: post.excerpt | strip_html | truncate: 110 }}</p>
      </a>
    {% endfor %}
  </div>
{% else %}
  暂时还没有笔记。下一篇文章就从一个小问题开始。
{% endif %}
