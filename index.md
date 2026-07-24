---
layout: default
title: 首页
---

<section class="hero">
  <p class="eyebrow">Journal</p>
  <h1>把值得回看的东西，安静地写下来。</h1>
  <p class="hero-lead">
    这里记录生活随想、工具经验和个人笔记。页面尽量保持克制，让内容本身站在前面。
  </p>
</section>

<section class="section">
  <div class="section-head">
    <h2>Latest</h2>
    <a href="{{ '/archive/' | relative_url }}">查看全部 →</a>
  </div>
  <div class="post-list">
    {% for post in site.posts limit: 6 %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          {% if post.category_label %}
            <span>{{ post.category_label }}</span>
          {% endif %}
        </div>
        <h3>{{ post.title }}</h3>
        {% if post.excerpt_text %}
          <p>{{ post.excerpt_text }}</p>
        {% else %}
          <p>{{ post.excerpt | strip_html | truncate: 96 }}</p>
        {% endif %}
      </a>
    {% endfor %}
  </div>
</section>
