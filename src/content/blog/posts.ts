export type BlogPost = {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  slug: string;
};

export const blogPosts: Record<string, BlogPost> = {
  'introducing-voxproc': {
    title: 'Introducing voxproc',
    date: 'January 1, 2025',
    readTime: 'WIP',
    summary: 'WIP',
    content: `
      <p>Coming soon.</p>
    `,
    slug: 'introducing-voxproc',
  },
};
