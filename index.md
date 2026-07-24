---
layout: default
title: Home
---

<section class="profile-hero">
  <div class="profile-copy">
    <h1><span class="text-accent">KungfuPanda</span> Notes</h1>
    <p class="lead">
      A quiet personal site for notes, tools, thoughts, and long-term writing.
      I keep things minimal here so the words can stay in front.
    </p>
    <p>
      This site collects practical tool notes, personal reflections, reading fragments,
      and small technical records that are worth revisiting later.
    </p>
  </div>

  <aside class="profile-card" aria-label="Profile">
    <div class="profile-avatar">KP</div>
    <p class="profile-name">KungfuPanda</p>
    <p class="profile-bio">{{ site.author.bio }}</p>
  </aside>
</section>

<section class="section">
  <div class="section-head">
    <h2>Latest posts</h2>
    <a href="{{ '/archive/' | relative_url }}">view all</a>
  </div>
  <div class="post-list">
    {% for post in site.posts limit: 6 %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <div class="post-date">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        </div>
        <div class="post-summary">
          <h3>{{ post.title }}</h3>
          {% if post.excerpt_text %}
            <p>{{ post.excerpt_text }}</p>
          {% else %}
            <p>{{ post.excerpt | strip_html | truncate: 96 }}</p>
          {% endif %}
        </div>
      </a>
    {% endfor %}
  </div>
</section>
