'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/content/blog/posts';

export default function BlogPage() {
  const posts = Object.values(blogPosts).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Blog</h1>
        <p className="text-neutral-600 mb-12">
          Updates on voxproc and the future of social media.
        </p>

        <div className="space-y-8">
          {posts.map(post => (
            <Card
              key={post.slug}
              className="border-2 border-neutral-200 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-neutral-900">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardContent className="px-0 py-0">
                  <p className="text-neutral-600 mb-4">{post.summary}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 text-neutral-900 hover:text-neutral-700 hover:bg-transparent"
                  >
                    <Link href={`/blog/${post.slug}`}>Read more →</Link>
                  </Button>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
