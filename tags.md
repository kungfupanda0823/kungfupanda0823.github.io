---
title: 标签
permalink: /tags/
eyebrow: Tags
description: "按标签重新找到文章。"
---

<div class="tag-cloud">
  {% for tag in site.tags %}
    {% assign tag_name = tag[0] %}
    {% assign tag_posts = tag[1] %}
    <a class="tag-pill" href="#{{ tag_name | slugify }}">{{ tag_name }} · {{ tag_posts.size }}</a>
  {% endfor %}
</div>

{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  {% assign tag_posts = tag[1] %}
  <h2 id="{{ tag_name | slugify }}">{{ tag_name }}</h2>
  <div class="post-list">
    {% for post in tag_posts %}
      {% assign first_category = post.categories | first %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <span>{{ post.category_label | default: first_category }}</span>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}
