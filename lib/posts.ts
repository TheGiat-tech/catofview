import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
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

      // Sanitize slug to only allow safe characters (alphanumeric, hyphens, underscores)
      const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '-');

      return {
        slug: sanitizedSlug,
        title: data.title || 'Untitled',
        date: data.date || '',
        author: data.author || 'Anonymous',
        excerpt: data.excerpt || '',
        image: data.image,
        content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Sanitize slug to only allow safe characters (alphanumeric, hyphens, underscores)
    const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '-');
    
    const fullPath = path.join(postsDirectory, `${sanitizedSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: sanitizedSlug,
      title: data.title || 'Untitled',
      date: data.date || '',
      author: data.author || 'Anonymous',
      excerpt: data.excerpt || '',
      image: data.image,
      content,
    };
  } catch (error) {
    return null;
  }
}
