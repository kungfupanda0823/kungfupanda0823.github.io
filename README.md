# KungfuPanda Notes

这是一个基于 Jekyll 和 GitHub Pages 的个人博客网站，用于长期记录生活随想、工具经验和个人笔记。

## 网站结构

```text
.
├── _posts/                 # 博客文章，文件名使用 日期-英文标题.md
├── _layouts/               # 页面布局模板
├── _includes/              # 页头、页脚等复用片段
├── assets/
│   ├── css/                # 自定义样式
│   ├── js/                 # 访问统计等脚本
│   ├── images/posts/       # 文章图片
│   └── files/              # 可下载文件
├── about.md                # 关于我
├── notes.md                # 笔记页
├── thoughts.md             # 随想页
├── archive.md              # 归档页
└── _config.yml             # Jekyll 配置
```

## 本地预览

第一次使用前，需要先安装 Ruby 和 Bundler。然后在仓库根目录运行：

```powershell
bundle install
bundle exec jekyll serve
```

启动后打开：

```text
http://127.0.0.1:4000
```

如果只是想构建检查，可以运行：

```powershell
bundle exec jekyll build
```

## 如何新增文章

在 `_posts` 文件夹中新建 Markdown 文件，文件名格式建议为：

```text
YYYY-MM-DD-english-title.md
```

例如：

```text
2026-07-25-my-first-note.md
```

文章开头需要写 front matter：

```yaml
---
title: "文章标题"
date: 2026-07-25 10:00:00 +0800
categories: [notes]
category_label: "个人笔记"
excerpt_text: "这是一句话摘要。"
---
```

正文直接使用 Markdown 编写。数学公式支持 MathJax：

```markdown
行内公式：$E = mc^2$

块级公式：

$$
E = mc^2
$$
```

代码块示例：

````markdown
```python
print("hello blog")
```
````

## 分类建议

当前模板默认使用这些分类：

- `thoughts`：生活随想；
- `notes`：个人笔记；
- `tools`：工具经验。

如果以后文章多了，可以继续增加 `reading`、`summary`、`research` 等分类。

当前版本采用极简文字刊物风格。第一版只保留分类、归档和文章列表，避免维护成本过高。

## 图片和附件

文章图片建议放在：

```text
assets/images/posts/YYYY-MM-DD-post-name/
```

附件建议放在：

```text
assets/files/
```

在文章中引用图片：

```markdown
![图片说明](/assets/images/posts/2026-07-25-my-note/fig1.png)
```

## 提交并发布到 GitHub Pages

修改完成后提交到 GitHub：

```powershell
git add .
git commit -m "Update blog"
git push
```

仓库包含 `.github/workflows/pages.yml`，推送到 `main` 分支后会自动构建并部署到 GitHub Pages。

在 GitHub 仓库中确认 Pages 设置：

1. 打开仓库 `Settings`；
2. 进入 `Pages`；
3. `Build and deployment` 选择 `GitHub Actions`；
4. 等待 Actions 运行完成。

默认网址通常是：

```text
https://kungfupanda0823.github.io
```

## 关于访问统计

页脚中的“今日访问”和“历史访问”目前使用浏览器 `localStorage` 统计，适合静态站第一版展示和本机查看。它不是全网真实访客统计。

如果以后需要真实全站访问统计，可以接入 GoatCounter、Plausible、Umami、Google Analytics 或 GitHub Pages 兼容的第三方统计服务。
