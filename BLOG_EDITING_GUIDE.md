# 个人博客网页编辑教程

这个博客仍然是 GitHub Pages + Jekyll 静态博客，不需要服务器、不需要数据库。
现在增加了“网页编辑入口”：你可以在浏览器里写文章、改文章，然后 GitHub 会自动提交并重新部署网站。

## 一、以后怎么在网页上写新文章

打开你的博客后，点击网页底部的：

```text
Write
```

或者直接访问：

```text
https://kungfupanda0823.github.io/admin/
```

然后点击：

```text
New post
```

它会打开 GitHub 的网页新建文件界面。

文件名写成这种格式：

```text
2026-08-06-my-new-note.md
```

建议规则：

- 日期用 `YYYY-MM-DD`
- 后面用英文小写
- 单词之间用 `-`
- 不要用中文文件名

然后把下面模板粘贴进去：

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

写完后，点击 GitHub 页面右上角或底部的：

```text
Commit changes...
```

GitHub 会自动保存并触发 Pages 更新。

## 二、文章应该放到哪个分类

文章开头的 `categories` 决定它显示在哪个栏目。

```yaml
categories: [notes]
```

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

## 三、怎么修改已有文章

打开任意一篇文章。

页面右下角会出现：

```text
Edit on GitHub
```

点击后会直接进入这篇文章对应的 GitHub 网页编辑界面。

修改完成后点击：

```text
Commit changes...
```

这样就不用打开本地文件夹，也不用手动 `git add / commit / push`。

## 四、怎么修改 About 页面

访问：

```text
https://kungfupanda0823.github.io/admin/
```

点击：

```text
Edit About
```

它会打开：

```text
_pages/about.md
```

你主要改这些位置：

```yaml
subtitle: Zest Carries Forever
```

这是名字下面的小标题。

```yaml
more_info: >
  <p class="profile-motto">I AM WHAT I AM</p>
```

这是头像下面的小字。

第二个 `---` 后面的正文，是 About 页面主体内容。

## 五、怎么修改顶部栏目

栏目页面都在：

```text
_pages/
```

当前栏目：

- `_pages/about.md`
- `_pages/notes.md`
- `_pages/tools.md`
- `_pages/lively.md`
- `_pages/mood.md`

如果要改显示名称，改文件开头：

```yaml
title: Notes
```

如果要控制顺序，改：

```yaml
nav_order: 1
```

如果不想显示在顶部导航，改成：

```yaml
nav: false
```

## 六、怎么修改页脚文字和访问统计

页脚主文字在：

```text
_config.yml
```

找到：

```yaml
footer_text: "Forever 37.3&#8451;"
```

这里的 `&#8451;` 会在网页里显示为 `℃`，这样可以避免 Windows 编码把符号弄坏。

访问统计在：

```text
_includes/footer.liquid
```

目前用的是不蒜子统计：

```html
<span id="busuanzi_value_site_pv">--</span>
```

如果统计没有立刻显示，通常是脚本加载、网络或浏览器拦截问题，不影响博客正文。

## 七、怎么修改样式

大多数自定义样式在：

```text
assets/css/custom.css
```

常见修改位置：

- 文章标题大小：搜索 `.post-header .post-title`
- 分类文章标题大小：搜索 `.category-post-title`
- 图标大小：搜索 `.social .contact-icons i`
- 页脚颜色：搜索 `Footer: motto and counter`
- 网页编辑按钮：搜索 `.web-edit-link`

## 八、注意事项

网页编辑虽然不用本地 Git，但本质上仍然是在 GitHub 仓库里提交文件。

所以你需要注意：

- 改完一定要点 `Commit changes...`
- 文件名尽量用英文
- 文章开头的 `---` 配置不要删
- `date` 格式不要乱
- `categories` 只用已有的四类：`notes / tools / lively / mood`
