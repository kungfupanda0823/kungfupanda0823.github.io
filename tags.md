---
title: 标签
permalink: /tags/
eyebrow: Tags
description: "按标签重新找到文章。"
---

<div class="tag-cloud">
  {% for tag in site.tags %}
    <a class="tag-pill" href="#{{ tag[0] | slugify }}">{{ tag[0] }} · {{ tag[1].size }}</a>
  {% endfor %}
</div>

{% for tag in site.tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <div class="post-list">
    {% for post in tag[1] %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <span>{{ post.category_label | default: post.categories.first }}</span>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}
