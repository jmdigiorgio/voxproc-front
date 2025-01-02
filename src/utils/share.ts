import { BlogPost } from '@/content/blog/posts';

interface ShareConfig {
  url: string;
  post: BlogPost;
}

export const copyLink = async ({ url }: ShareConfig) => {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (err) {
    console.error('Failed to copy link:', err);
    return false;
  }
};
