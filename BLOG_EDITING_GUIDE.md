# 个人博客本地维护教程

这个博客采用 GitHub Pages + Jekyll 静态博客方案。推荐维护方式是：

```text
本地修改文件 -> GitHub Desktop 提交 -> Push origin -> GitHub Pages 自动更新
```

这样最稳定，也最适合长期维护个人笔记博客。

## 1. 打开本地博客文件夹

你的本地仓库位置是：

```text
F:\009Blog\GithubProjects\kungfupanda0823.github.io
```

建议用 VS Code 打开这个文件夹。

不要只打开某一个 Markdown 文件，最好打开整个仓库文件夹，这样图片路径、文章目录、配置文件都容易管理。

## 2. 新增一篇文章

所有文章都放在：

```text
_posts
```

新建文件时，文件名使用：

```text
YYYY-MM-DD-english-title.md
```

例如：

```text
2026-08-06-my-new-note.md
```

不要用中文文件名，避免路径兼容问题。

文章模板：

```markdown
---
layout: post
title: 你的文章标题
date: 2026-08-06 20:00:00 +0800
description: 这里写一句话摘要，会显示在文章列表里。
categories: [notes]
---

正文从这里开始写。
```

## 3. 选择文章分类

文章开头的 `categories` 决定它显示在哪个栏目。

可用分类：

```yaml
categories: [notes]
categories: [tools]
categories: [lively]
categories: [mood]
```

对应关系：

- `notes`：笔记、读书记录、知识整理
- `tools`：工具、软件、流程、代码经验
- `lively`：生活记录、见闻、照片、日常
- `mood`：情绪、随想、短句、私人表达

如果你想让一篇文章显示在 `Tools` 栏目，就写：

```yaml
categories: [tools]
```

## 4. 修改已有文章

进入：

```text
_posts
```

找到对应的 `.md` 文件，直接修改正文即可。

文章标题改这里：

```yaml
title: 你的文章标题
```

文章摘要改这里：

```yaml
description: 这里写一句话摘要。
```

文章分类改这里：

```yaml
categories: [notes]
```

## 5. 修改 About 页面

About 页面文件是：

```text
_pages/about.md
```

名字下面的小标题：

```yaml
subtitle: Zest Carries Forever
```

头像下面的小字：

```yaml
more_info: >
  <p class="profile-motto">I AM WHAT I AM</p>
```

第二个 `---` 后面的文字，就是 About 页面的正文。

## 6. 修改顶部栏目

栏目页面都在：

```text
_pages
```

当前栏目：

- `_pages/about.md`
- `_pages/notes.md`
- `_pages/tools.md`
- `_pages/lively.md`
- `_pages/mood.md`

显示名称改这里：

```yaml
title: Notes
```

顶部排序改这里：

```yaml
nav_order: 1
```

是否显示在顶部导航：

```yaml
nav: true
```

如果不想显示：

```yaml
nav: false
```

## 7. 修改页脚文字和访问统计

全局配置文件是：

```text
_config.yml
```

页脚文字：

```yaml
footer_text: "Forever 37.3&#8451;"
```

这里的 `&#8451;` 会在网页里显示为 `℃`，可以避免 Windows 编码问题。

访问统计位置：

```text
_includes/footer.liquid
```

目前使用不蒜子统计：

```html
<span id="busuanzi_value_site_pv">--</span>
```

如果统计没有显示，常见原因是浏览器插件、网络或第三方统计脚本加载失败。

## 8. 修改样式

主要样式文件是：

```text
assets/css/custom.css
```

常见修改位置：

- 文章标题大小：搜索 `.post-header .post-title`
- 分类文章标题大小：搜索 `.category-post-title`
- 图标大小：搜索 `.social .contact-icons i`
- 页脚颜色：搜索 `Footer: motto and counter`
- About 页面头像样式：搜索 `.profile img`

## 9. 用 GitHub Desktop 提交并推送

本地文件改完后：

1. 打开 GitHub Desktop
2. 选择仓库 `kungfupanda0823.github.io`
3. 左下角会看到修改过的文件
4. 在 `Summary` 写一句提交说明，例如：

```text
Update blog post
```

5. 点击：

```text
Commit to main
```

6. 再点击右上角：

```text
Push origin
```

推送后 GitHub Pages 会自动重新部署网站。通常等几十秒到几分钟即可看到更新。

## 10. 最推荐的日常更新流程

每次更新博客时，按这个顺序：

```text
1. 在 _posts 里新增或修改 Markdown 文章
2. 检查 title / date / description / categories
3. 保存文件
4. 打开 GitHub Desktop
5. Commit to main
6. Push origin
7. 等 GitHub Pages 自动更新
```

这就是以后维护博客的主流程。
