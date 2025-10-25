import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  tags?: string[];
  rating?: number;
  products?: Product[];
}

export interface Product {
  title: string;
  name: string;
  image: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
}

export interface Post {
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
  readingTime: string;
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontMatter: data as PostFrontMatter,
        content,
        readingTime: readingTime(content).text,
      };
    });

  return allPostsData.sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as PostFrontMatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .process(markdown);
  return result.toString();
}
