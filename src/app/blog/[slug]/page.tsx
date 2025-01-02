'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/content/blog/posts';
import { ShareButtons } from '@/components/blog/ShareButtons';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center font-mono">
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          Post not found
        </h1>
        <Button asChild variant="ghost">
          <Link href="/blog">← Back to Blog</Link>
        </Button>
      </div>
    );
  }

  // Get the current URL for sharing
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="container mx-auto px-4 py-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <Button
          asChild
          variant="ghost"
          className="mb-8 -ml-2 text-neutral-600 hover:text-neutral-900"
        >
          <Link href="/blog">← Back to Blog</Link>
        </Button>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <ShareButtons post={post} url={url} />
        </article>
      </div>
    </div>
  );
}
