---
title: Archive
permalink: /archive/
eyebrow: Archive
description: "All posts in chronological order."
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
  <h2 class="archive-year">{{ year.name }}</h2>
  {% for post in year.items %}
    <div class="archive-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m-%d" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </div>
  {% endfor %}
{% endfor %}
