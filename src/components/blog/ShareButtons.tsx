'use client';

import { BlogPost } from '@/content/blog/posts';
import { copyLink } from '@/utils/share';
import { useState } from 'react';

interface ShareButtonsProps {
  post: BlogPost;
  url: string;
}

export function ShareButtons({ post, url }: ShareButtonsProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyLink({ url, post });
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="share-section">
      <h3>Share this post</h3>
      <div className="share-buttons">
        <div className="relative">
          <button
            aria-label={isCopied ? 'Link copied!' : 'Copy link to clipboard'}
            onClick={handleCopyLink}
            className={`share-button copy-link ${isCopied ? 'copied' : ''}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isCopied && <div className="copy-tooltip">Copied!</div>}
        </div>
      </div>
    </div>
  );
}
