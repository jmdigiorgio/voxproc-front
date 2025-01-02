export interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  slug: string;
  shareMetadata?: {
    twitterText?: string;
    linkedinTitle?: string;
    image?: string;
  };
}
