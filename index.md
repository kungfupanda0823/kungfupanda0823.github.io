---
layout: default
title: 首页
---

<section class="hero">
  <div>
    <p class="eyebrow">Personal Knowledge Garden</p>
    <h1>把零散生活，慢慢写成有纹理的记录。</h1>
    <p class="hero-lead">
      这里会放生活随想、工具经验、学习片段和个人笔记。它不急着成为一个宏大的系统，只先成为一个稳定、清爽、愿意反复回来写的地方。
    </p>
    <div class="hero-actions">
      <a class="button" href="{{ '/notes/' | relative_url }}">阅读笔记</a>
      <a class="button secondary" href="{{ '/about/' | relative_url }}">了解我</a>
    </div>
  </div>
  <aside class="hero-card">
    <p class="eyebrow">Now</p>
    <strong>当前主题</strong>
    <ul>
      <li>个人笔记的整理方式</li>
      <li>工具使用中的小经验</li>
      <li>读书、科研与生活之间的随手记录</li>
    </ul>
  </aside>
</section>

<section class="section">
  <div class="section-head">
    <h2>最新文章</h2>
    <a href="{{ '/archive/' | relative_url }}">查看全部 →</a>
  </div>
  <div class="post-list">
    {% for post in site.posts limit: 6 %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          {% if post.category_label %}
            <span>{{ post.category_label }}</span>
          {% endif %}
        </div>
        {% if post.excerpt_text %}
          <p>{{ post.excerpt_text }}</p>
        {% else %}
          <p>{{ post.excerpt | strip_html | truncate: 96 }}</p>
        {% endif %}
      </a>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>栏目</h2>
  </div>
  <div class="post-list">
    <a class="post-card" href="{{ '/notes/' | relative_url }}">
      <h3>笔记</h3>
      <p>放学习记录、方法整理、工具经验和那些值得以后回来查的东西。</p>
    </a>
    <a class="post-card" href="{{ '/thoughts/' | relative_url }}">
      <h3>随想</h3>
      <p>放更个人、更松弛的观察：关于生活、阅读、阶段感受和一点点自我校准。</p>
    </a>
  </div>
</section>
