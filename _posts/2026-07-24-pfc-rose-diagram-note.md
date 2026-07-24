---
layout: post
title: "PFC 学习记录：接触数据与三维玫瑰图"
date: 2026-07-24 20:40:00 +0800
categories: [notes]
category_label: "Notes"
excerpt_text: "从示例材料整理出的一篇技术笔记：在 PFC 中做三维玫瑰图时，最少应该保存哪些接触数据。"
description: "从示例材料整理出的一篇技术笔记：在 PFC 中做三维玫瑰图时，最少应该保存哪些接触数据。"
---

这篇文章来自我放在 `BlogMaterial` 文件夹里的 PFC 讨论材料。原材料很长，这里先整理成适合博客展示和后续扩展的一版笔记。

## 最少要保存什么数据

如果后续想画三维玫瑰图，最少要保存“接触方向 + 接触力信息”。只保存一个法向力标量是不够的，因为玫瑰图表达的是方向分布。

建议最低配字段如下：

```text
step 或 strain_state
cx, cy, cz
nx, ny, nz
fn
fx, fy, fz
```

其中：

- `cx, cy, cz` 是接触位置，可以用于后续筛选局部区域；
- `nx, ny, nz` 是接触法向单位向量，是玫瑰图的方向基础；
- `fn` 是法向接触力标量；
- `fx, fy, fz` 是全局坐标系下的接触力矢量。

如果希望后处理更方便，还可以保存：

```text
contact_id
contact_type
active
bx, by, bz
group 或 region_tag
```

## 三维玫瑰图适合画什么

在 DEM / PFC 里，三维玫瑰图最适合表达“方向性”数据。常见对象有三类：

1. 接触法向：看几何组构，也就是接触网络偏向哪些方向；
2. 法向接触力：看主要承载方向；
3. 切向接触力：看剪切、摩擦和局部滑移机制。

如果只能选一个主图，我会优先画“法向接触力三维玫瑰图”，再配一张“接触法向玫瑰图”。前者更直接反映承载骨架，后者帮助解释结构来源。

## 一个后处理思路

法向接触力图可以这样理解：

$$
\mathbf{F}_n = |f_n| \mathbf{n}
$$

其中 $\mathbf{n}$ 是接触法向单位向量，$f_n$ 是法向接触力标量。

切向接触力如果没有直接导出，也可以尝试用总接触力减去法向分量：

$$
\mathbf{F}_t = \mathbf{F} - \mathbf{F}_n
$$

这类公式和代码片段很适合放进博客：以后自己回来查，比翻聊天记录快得多。

```python
import numpy as np

n = np.array([nx, ny, nz])
f_total = np.array([fx, fy, fz])
f_normal = abs(fn) * n
f_tangent = f_total - f_normal
```

## 以后可以继续补什么

这篇只是一个示例。后面可以继续补：

- PFC/FISH 导出 CSV 的完整脚本；
- Python 绘制 2D/3D 玫瑰图的代码；
- 文献中常见的 fabric、normal force、tangential force 解释框架；
- 正文图、补充图和图注模板。

把它放到博客里之后，这类材料就不再只是一次问答，而能慢慢变成可复用的技术笔记。
