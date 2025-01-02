import { BlogPost } from './types';
import { post as introducingVoxproc } from './posts/introducing-voxproc';

export type { BlogPost };

export const blogPosts: Record<string, BlogPost> = {
  'introducing-voxproc': introducingVoxproc,
};
