# xinyinzhangharriet.github.io

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

## Writing a post

Create a Markdown file in `src/content/blog/en/` (English) and/or `src/content/blog/zh/` (Chinese). Use the same file name in both folders so the language switch links the two versions.

```md
---
title: Post title
description: One-line summary (optional)
date: 2026-09-17
draft: false
---

Body in Markdown.
```

Then commit and push. The site rebuilds automatically.

## Editing the resume

Edit `src/data/resume.ts`. Both languages live in the same file.

## Local preview

```sh
npm install
npm run dev
```
