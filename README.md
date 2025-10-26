# 🐱 Cat of View

A beautiful blog dedicated to cats, built with Next.js, TypeScript, and Tailwind CSS. Features a warm desert color palette with browns, tans, and mustards.

![Cat of View Homepage](https://github.com/user-attachments/assets/8d994983-7705-468d-b830-93866af33e56)

## ✨ Features

- **📝 Blog System**: Full-featured blog with markdown support and frontmatter metadata
- **🎨 Desert Color Palette**: Beautiful warm colors (browns, tans, mustards) throughout
- **💻 Syntax Highlighting**: Code blocks with proper syntax highlighting for multiple languages
- **🛍️ Amazon Affiliate Products**: Dedicated component for showcasing Amazon products with images, prices, and descriptions
- **📱 Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **⚡ Static Site Generation**: Fast performance with Next.js SSG

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheGiat-tech/catofview.git
cd catofview
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
catofview/
├── app/                    # Next.js app directory
│   ├── blog/[slug]/       # Dynamic blog post pages
│   ├── globals.css        # Global styles with desert palette
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── AmazonProduct.tsx  # Amazon affiliate product display
│   └── BlogContent.tsx    # Markdown blog content renderer
├── content/posts/         # Blog posts in Markdown
├── lib/                   # Utility functions
│   └── posts.ts          # Blog post management
└── public/               # Static assets
    └── images/           # Product images
```

## 📝 Adding Blog Posts

Create a new markdown file in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2025-10-25"
author: "Your Name"
excerpt: "Brief description of your post"
---

# Your Post Content

Write your content here using Markdown...
```

## 🎨 Color Palette

The desert theme uses these colors:

- **Sand**: #E8D5B7
- **Tan**: #D4A373
- **Brown**: #8B6F47
- **Dark Brown**: #654321
- **Mustard**: #D4AF37
- **Cream**: #F5EFE0
- **Terracotta**: #B87333

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Markdown**: react-markdown, gray-matter
- **Syntax Highlighting**: rehype-highlight

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ for cat lovers everywhere
