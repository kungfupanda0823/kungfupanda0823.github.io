---
title: 随想
permalink: /thoughts/
eyebrow: Thoughts
description: "日常观察、阶段感受和那些不必马上归类的想法。"
---

{% assign thought_posts = site.posts | where_exp: "post", "post.categories contains 'thoughts'" %}

{% if thought_posts.size > 0 %}
  <div class="post-list">
    {% for post in thought_posts %}
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
  暂时还没有随想。留白也算一种开始。
{% endif %}
